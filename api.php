<?php
require("bitrix/modules/main/include/prolog_before.php");
CModule::includeModule('iblock');
require("BitrixAPI/iiko/IIkoGet.php");
require("BitrixAPI/IblockWorker.php");
require("BitrixAPI/Api.php");
use Bitrix\Main\Context;
use Bitrix\Main\Application;
header('Access-Control-Allow-Origin: *');

//Api::creatProductsTree(); create DB tree for work with api iiko

$request = Application::getInstance()->getContext()->getRequest();
$values = $request->getPostList();
switch ($values['command']) {
    case 'getCatalog':
        $res = [];
        $res['products'] = Api::getProducts($values);
        $result['additional'] = Api::getAdditional($res['products'],$values['search'],$values['code'],$values['page']);

        $start = (Data::$amountItemsOnPage*(int)$values['page']) - Data::$amountItemsOnPage;
        $end = Data::$amountItemsOnPage ;

        $result['products'] = array_slice($res['products'], $start,$end);
        echo json_encode($result);
        break;

    case 'getMenu':
        $res = [];
        $arr = Api::getMenu();

        foreach ($arr as $el)
        {
            $rsFile = CFile::GetByID($el['PICTURE']);
            $arFile = $rsFile->Fetch();
            $imageUrl = '/upload/' . $arFile["SUBDIR"] . '/' . $arFile["FILE_NAME"];
            $res[] = [
                "name"=>$el['NAME'],
                "code"=>$el["CODE"],
                "img"=>$imageUrl
            ];
        }
        echo json_encode($res);
        break;

}
