<?php
require_once ('HttpRequest.php');

class Init extends HttpRequest
{
    public $token = null;
    public $merge = null;
    public $organizationId = ["organizationId"=>"6fddeb51-663b-11e7-80df-d8d38565926f"];
    private $auth = [
        "user_id"=>"demoDelivery",
        "user_secret"=>"PI1yFaKFCGvvJKi"
        ];

    public function __construct()
    {
        $token = $this->curl_get('auth/access_token',$this->auth);
        $this->token = [
            "access_token"=>  $token
        ];

    }

    protected function setToken()
    {
        $token = $this->curl_get('auth/access_token',$this->auth);
        $_SESSION['token'] = preg_replace('/[^A-Za-z0-9\-]/',"",$token);
        $this->token = [
            "access_token"=>  $_SESSION['token']
        ];
        $this->merge = array_merge($this->token, $this->organizationId);
    }

    public function getOrganizationList()
    {
        $list = $this->curl_get('organization/list',$this->token);
        return $list;
    }

}