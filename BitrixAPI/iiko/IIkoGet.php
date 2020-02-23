<?php
require_once ('Init.php');

class IIkoGet extends Init
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function template($command, $params)
    {
        $list = null;
        $count = 0;
        while($list == null && $count < 200)
        {
            $list = $this->curl_get('nomenclature/'.$this->organizationId['organizationId'],$this->token);
            $count++;
        }

        return $list;
    }
    public function nomenclature()
    {
        $list = $this->template('nomenclature/'.$this->organizationId['organizationId'], $this->token);
        return $list;
    }
    public function groups()
    {
        $list = $this->template('nomenclature/'.$this->organizationId['organizationId'], $this->token);
        return $list["groups"];
    }
    public function products()
    {
        $list = $this->template('nomenclature/'.$this->organizationId['organizationId'], $this->token);
        return $list["products"];
    }
    public function productCategories()
    {
        $list = $this->template('nomenclature/'.$this->organizationId['organizationId'], $this->token);
        return $list["productCategories"];
    }
    public function cities()
    {
        $list = $this->template('cities/cities', $this->merge);
        return $list;
    }
    public function organizationCities()
    {
        $list = $this->template('cities/citiesList', $this->merge);
        return $list;
    }
    public function streets($id)
    {
        $arr = ['city'=>$id];
        $arr = array_merge($this->merge, $arr);
        $list = $this->template('streets/streets',$arr);
        return $list;

    }
    public function regions()
    {
        $list = $this->template('regions/regions',$this->merge);
        return $list;
    }
}