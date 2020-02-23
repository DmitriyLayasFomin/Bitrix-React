<?php


class Data
{
    public static $propertyList = [
        ['name' => 'Цена', 'code' => 'price', "type" => "N"],
        ['name' => 'iiko_id', 'code' => 'iiko_id', "type" => "S"],
        ['name' => 'iiko_code', 'code' => 'iiko_code', "type" => "S"],
        ['name' => 'Вес', 'code' => 'weight', "type" => "N"],
        ['name' => 'Старая цена', 'code' => 'old_price', "type" => "N"],
    ];
    public static $typeBlockName = "catalog";
    public static $additionalName = "additional";
    public static $amountItemsOnPage = 4;
    public static $breadcrumbs = [
        'catalog' => [
            'name' => 'Каталог',

        ],
        'detail' => [
                'name' => 'Каталог',

            ],
        'delivery' => ['name' => 'Доставка'],
        'order' => ['name' => 'Оформление заказа'],
    ];
}