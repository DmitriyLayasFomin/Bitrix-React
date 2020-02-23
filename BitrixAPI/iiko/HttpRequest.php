<?php


class HttpRequest
{
    private $iiko = 'https://iiko.biz:9900/api/0/';

    public function request($defaults,$options = array())
    {
        $ch = curl_init();
        curl_setopt_array($ch, ($options + $defaults));
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        if( ! $result = curl_exec($ch)){
            trigger_error(curl_error($ch));
        }
        curl_close($ch);
        return $result;
    }
    public function curl_get($url, array $get = NULL,$options = array())
    {
        $defaults = array(
            CURLOPT_URL => $this->iiko.$url.'?'.http_build_query($get),
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_DNS_USE_GLOBAL_CACHE => false,
            CURLOPT_SSL_VERIFYHOST => 0, //unsafe, but the fastest solution for the error " SSL certificate problem, verify that the CA cert is OK"
            CURLOPT_SSL_VERIFYPEER => 0, //unsafe, but the fastest solution for the error " SSL certificate problem, verify that the CA cert is OK"


        );
        $result = $this->request($defaults,$options);
        $result = json_decode($result,true);
        return $result;
    }
    public function curl_post($url, $post = null,$options = array()) {
        $defaults = array(
            CURLOPT_POST => 1,
            CURLOPT_HEADER => 0,
            CURLOPT_URL => $this->iiko.$url,
            CURLOPT_FRESH_CONNECT => 1,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_FORBID_REUSE => 1,
            CURLOPT_POSTFIELDS => $post
        );
        $result = $this->request($defaults,$options);
        $result = json_decode($result,true);
        return $result;
    }
}