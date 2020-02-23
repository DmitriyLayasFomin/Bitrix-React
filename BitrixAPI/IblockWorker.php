<?php

require_once('Data.php');

class IblockWorker extends Data
{
    public $blockType, $block, $property, $element, $productsArray, $categoryArray, $groups;

    public function __construct($productsArray, $categoryArray, $groups)
    {
        $this->blockType = new CIBlockType();
        $this->block = new CIBlock();
        $this->property = new CIBlockProperty();
        $this->element = new CIBlockElement();
        $this->productsArray = $productsArray;
        $this->categoryArray = $categoryArray;
        $this->groups = $groups;
    }

    /*
     * Переводит русские символы в латинские в нижнем регистре
     */
    public function translit($s)
    {
        $s = (string)$s;
        $s = trim($s);
        $s = function_exists('mb_strtolower') ? mb_strtolower($s) : strtolower($s); // переводим строку в нижний регистр (иногда надо задать локаль)
        $s = strtr($s, array(' ' => '_', 'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'e', 'ж' => 'j', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shch', 'ы' => 'y', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya', 'ъ' => '', 'ь' => ''));
        return $s;
    }

    /*
     * Добавляет свойство к инфоблоку
     */
    protected function addField($name, $code, $type, $id)
    {
        $arFields = [
            "NAME" => $name,
            "ACTIVE" => "Y",
            "SORT" => "100",
            "CODE" => $code,
            "PROPERTY_TYPE" => $type,
            "IS_REQUIRED" => "Y",
            "IBLOCK_ID" => $id,
            "DEFAULT_VALUE" => 1,
            "FILTRABLE" => "Y"
        ];
        $PropID = $this->property->Add($arFields);

        return $PropID;
    }

    /*
     * Обновляет свойство
     */
    protected function updateField($id, $name, $code, $type)
    {
        $arFields = Array(
            "NAME" => $name,
            "ACTIVE" => "Y",
            "SORT" => "100",
            "CODE" => $code,
            "PROPERTY_TYPE" => $type,
        );
        $PropID = $this->property->Update($id, $arFields);
        return $PropID;
    }

    /*
     * Удаляет свойство по его коду
     */
    protected function removeFieldsByCode($code)
    {
        $l = CIBlockProperty::GetList(array('block_id' => Data::$typeBlockName), array("CODE" => $code));
        while ($prop_fields = $l->Fetch()) {
            $this->property->Delete($prop_fields["ID"]);
        }
    }

    /*
     * Удаляет свойство по массиву элеметов, содержачих ключ code
     */
    protected function removeFieldsByArrayCode($array = null)
    {
        $array == null ? $array = Data::$propertyList : null;

        foreach ($array as $el) {
            $this->removeFieldsByCode($el['code']);
        }
    }

    /*
     * Проверяет имеются ли свойства по заданному коду. Возврашает массив id свойств
     */
    protected function hasField($code)
    {
        $arr = [];
        $l = CIBlockProperty::GetList(array('block_id' => Data::$typeBlockName), array("CODE" => $code));
        while ($prop_fields = $l->Fetch()) {
            $arr[] = $prop_fields["ID"];
        }
        return $arr;
    }

    /*
     * Проверяет имеется ли заданный в конструкторе тип инфоблока.
     */
    protected function hasTypeBlock()
    {
        $ciBlock = CIBlockType::GetByID(Data::$typeBlockName);
        $ar_res = $ciBlock->GetNext();
        if ($ar_res['ID'] == null) {

            $arFields = [
                'ID' => Data::$typeBlockName,
                'LANG' => [
                    'en' => [
                        'NAME' => 'Catalog',
                    ],
                    'ru' => [
                        'NAME' => 'Каталог',
                    ]
                ]
            ];

            $ID = $this->blockType->Add($arFields);
        } else {
            $ID = $ar_res['ID'];
        }
        return $ID;
    }

    /*
     * Получает массив инфоблоков по коду. При пустом параметре возвращает все инфоблоки
     */
    public static function getBlocksByCode($code = '')
    {
        $res = CIBlock::GetList(['iblock_type' => Data::$typeBlockName], ['CODE' => $code]);

        $arr = [];

        while ($ar_res = $res->GetNext()) {

            $arr[] = $ar_res;
        }
        return $arr;
    }


    /*
     * Добавляет инфоблок
     */
    protected function addBlock($category)
    {
        $group = $this->matchGroup($category['name']);
        $imageUrl = $group['images'][count($group['images']) - 1]['imageUrl'];
        $image = file_get_contents($imageUrl);
        $path_parts = pathinfo($imageUrl);
        $arIMAGE = [
            "name" => str_replace('-', '', $path_parts['filename']) . '.' . $path_parts['extension'],
            "content" => $image
        ];
        var_dump($arIMAGE['name']);
        //die();
        $fid = CFile::SaveFile($arIMAGE, "iikoImage");
        $rsFile = CFile::GetByID($fid);
        $arFile = $rsFile->Fetch();
        var_dump($_SERVER["DOCUMENT_ROOT"] . '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"]);
        $arFields = [
            "ACTIVE" => "Y",
            "NAME" => $category['name'],
            "CODE" => $this->translit($category['name']),
            "IBLOCK_TYPE_ID" => Data::$typeBlockName,
            "PICTURE" => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"] . '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"]),
            "SITE_ID" => "s2",
        ];
        $id = $this->block->Add($arFields);
        var_dump($id);
        return $id;
    }

    /*
     * Добавляет инфоблоки согласно заданному массиву категорий
     */
    protected function addCategories($categories)
    {
        foreach ($categories as $category) {
            $id = $this->addBlock($category);
        }
    }

    /*
     * Добавляет инфоблоки согласно заданному массиву категорий
     */
    protected function matchGroup($name)
    {
        $_group = null;
        foreach ($this->groups as $group) {
            $group['name'] == $name ? $_group = $group : void;
        }
        return $_group;
    }

    /*
     * Добавляет переданный массив свойств к инфоблоку
     */
    protected function fieldsround($fields, $id)
    {
        foreach ($fields as $field) {
            $_id = $this->addField($field['name'], $field['code'], $field['type'], $id);
        }
    }

    /*
    * Определяет принадлежность элемента к категории и возвращает имя категории в (кириллице)
    */
    protected function getNameCategory($id)
    {
        foreach ($this->categoryArray as $category) {
            if ($category['id'] == $id)
                return $category['name'];

        }
        return false;
    }

    /*
    * Добавляет все элементы инфоблока принадлежащие к нему по категории
    */
    protected function roundCreateProduct($id, $code)
    {
        foreach ($this->productsArray as $product) {
            $name = $this->getNameCategory($product["productCategoryId"]);
            $name = $this->translit($name);

            if ($code == $name)
                $this->createProduct($id, $product);
        }
    }

    /*
    * Создает элемент в инфоблоке
    */
    protected function createProduct($id, $product)
    {
        $imageUrl = $product['images'][count($product['images']) - 1]['imageUrl'];
        $image = file_get_contents($imageUrl);
        $path_parts = pathinfo($imageUrl);
        $arIMAGE = [
            "name" => str_replace('-', '', $path_parts['filename']) . '.' . $path_parts['extension'],
            "content" => $image
        ];
        $fid = CFile::SaveFile($arIMAGE, "iikoImage");
        $rsFile = CFile::GetByID($fid);
        $arFile = $rsFile->Fetch();
        var_dump('createProduct');
        var_dump($_SERVER["DOCUMENT_ROOT"] . '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"]);
        $arr = [
            "IBLOCK_ID" => $id,
            "NAME" => $product["name"],
            "CODE" => $this->translit($product["name"]),
            "DETAIL_TEXT" => $product["description"],
            "ACTIVE" => "Y",
            "PREVIEW_PICTURE" => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"] . '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"]),
            "DETAIL_PICTURE" => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"] . '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"]),
            "PROPERTY_VALUES" => [
                "price" => $product["price"],
                "weight" => $product["weight"],
                "iiko_id" => $product["id"],
                "iiko_code" => $product["code"],
            ]
        ];
        $ID = $this->element->Add($arr);
        CIBlock::SetPermission($ID, Array("1"=>"X", "2"=>"R"));

        var_dump($ID);
    }

    public function addInformBlock()
    {
        $ciBlock = CIBlockType::GetByID(Data::$additionalName);
        $ar_res = $ciBlock->GetNext();
        if ($ar_res['ID'] == null) {

            $arFields = [
                'ID' => Data::$typeBlockName,
                'LANG' => [
                    'en' => [
                        'NAME' => 'Additional',
                    ],
                    'ru' => [
                        'NAME' => 'Баннер',
                    ]
                ]
            ];
            $ID = $this->blockType->Add($arFields);
            addBanner();
            addNews();
            addStaticPages();
        } else {
            $ID = $ar_res['ID'];
        }
    }

    /*
     * Добавляет дерево из инфоблоков, элементов и свойств
     *
     */
    public function addProductsThree($fields = null)
    {
        $ciblock = $this->hasTypeBlock();
        if ($ciblock !== null) {
            $this->addCategories($this->categoryArray);
        }
        if ($fields == null) {
            $fields = Data::$propertyList;
        }
        $blocks = self::getBlocksByCode('');
        foreach ($blocks as $block) {
            $this->fieldsround($fields, $block['ID']);
            $this->roundCreateProduct($block['ID'], $block['CODE']);
        }

    }

//Добавит пагинацию
    public static function getElementById($id)
    {
        $res = CIBlockElement::GetByID($id);
        $ar_res = $res->GetNext();
        return $ar_res;

    }

    public static function getElements($code = '', $search = '')
    {
        $blockArray = self::getBlocksByCode($code);

        $result = [];
        $resultTemp = [];
        $el = null;
        foreach ($blockArray as $block) {
            $el = CIBlockElement::GetList(['iblock_id' => $block["ID"]], ['IBLOCK_CODE' => $block['CODE'], 'ACTIVE' => 'Y', 'NAME' => "%{$search}%"]);

            while ($ob = $el->GetNextElement()) {

                if ($ob->fields['CODE'] != 'dostavki') {
                    $resultTemp[] = $ob->GetFields();
                }

            }

            $el = CIBlockElement::GetList(['iblock_id' => $block["ID"]], ['IBLOCK_CODE' => $code, 'ACTIVE' => 'Y', 'DETAIL_TEXT' => "%{$search}%"]);
            while ($ob = $el->GetNextElement()) {

                if ($ob->fields['CODE'] != 'dostavki') {
                    $resultTemp[] = $ob->GetFields();
                }

            }
        }

        foreach ($resultTemp as $key => $value) {
            $result[$value["ID"]][] = $value;
            unset($resultTemp[$key]);
        }

        return $result;
    }

    public static function getProperty($product)
    {
        $arr = [];
        $prop = CIBlockElement::GetProperty($product[0]["IBLOCK_ID"], $product[0]["ID"]);
        while ($ob = $prop->GetNext()) {
            $arr[$ob['CODE']] = $ob['VALUE'];
        }
        return $arr;
    }

    public static function getCategoryName($code)
    {
        $res = CIBlock::GetList(['iblock_type' => Data::$typeBlockName], ['CODE' => $code]);
        $name = null;
        while ($ar_res = $res->Fetch()) {

            $name = $ar_res['NAME'];
        }
        return $name;
    }
}
