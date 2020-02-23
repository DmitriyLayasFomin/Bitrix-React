<?php
require_once('Data.php');

class Api extends Data
{

    public static function creatProductsTree()
    {
        $iikoGet = new IIkoGet();
        $nom = $iikoGet->nomenclature();
        $iblock = new IblockWorker($nom["products"], $nom["productCategories"], $nom["groups"]);
        $iblock->addProductsThree();
        die();
    }
    public static function getProducts($request)
    {
        $code = $trimmed = trim($request['code']);
        $products = [];
        $res = IblockWorker::getElements($code, $request['search']);

        foreach ($res as $product) {
            $rsFile = CFile::GetByID($product[0]["PREVIEW_PICTURE"]);
            $arFile = $rsFile->Fetch();
            $imageUrl = '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"];

            $props = IblockWorker::getProperty($product);
            $products[] = [
                "id" => $product[0]["ID"],
                "name" => $product[0]["NAME"],
                "description" => $product[0]["DETAIL_TEXT"],
                "gram" => $props['weight'],
                "oldPrice" => $props['old_price'],
                "price" => $props['price'],
                "img" => $imageUrl
            ];
        }

        return $products;
    }

    public static function getAdditional($products, $search, $code, $page)
    {
        $_code = $trimmed = trim($code);
        $name = IblockWorker::getCategoryName($_code);
        $arr = [
            "search" => $search,
            "code" => $_code,
            "categoryName" => $name,
            "page" => $page,
            "amount" => count($products)
        ];

        return $arr;
    }

    public static function getMenu()
    {
        $res = [];
        $blocks = IblockWorker::getBlocksByCode();
        foreach ($blocks as $block)
        {
            if($block['NAME'] !== 'Доставки')
                $res[] = $block;
        }
        return $res;
    }
    public static function addBannerBlock()
    {

    }
    public static function addNewsBlock()
    {

    }
    public static function gtProducts($request)
    {

    }
}