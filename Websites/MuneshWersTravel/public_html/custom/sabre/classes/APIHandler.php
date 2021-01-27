<?php

    /**
     * Class that handles security functionality for Sabre API
     *
     * @author Joshua Kissoon
     * @since 20150927
     */
    class APIHandler
    {

        protected $apiUrl = "https://api.test.sabre.com/v2";
        protected $appKey = "";
        protected $accessToken = null;
        protected $accessTokenExpiresIn = null;
        protected $clientId = "V1:er2622faknlk7304:DEVCENTER:EXT";
        protected $clientSecret = "2m7CnMnA";
        protected $contentType = "Content-type: application/x-www-form-urlencoded";

        public function __construct()
        {
            $this->generateAppKey();
            $this->getAccessToken();
        }

        /**
         * Method that generates the App Key using the Algorithm as described at https://developer.sabre.com/docs/read/rest_basics/authentication
         * 
         * @author Joshua Kissoon
         * @since 20150927
         */
        private function generateAppKey()
        {
            $encodedClientId = base64_encode($this->clientId);
            $encodedClientSecret = base64_encode($this->clientSecret);
            $concatenated = "$encodedClientId:$encodedClientSecret";
            $this->appKey = base64_encode($concatenated);
        }

        public function getAccessToken()
        {
            if (null == $this->accessToken || 10 > $this->accessTokenExpiresIn)
            {
                $this->requestAccessToken();
            }

            return $this->accessToken;
        }

        /**
         * Method to request the access token from Sabre's Server
         */
        private function requestAccessToken()
        {
            $data = array('grant_type' => 'client_credentials');

            $result = $this->post("/auth/token", $data, array("Authorization:Basic $this->appKey"));
            $this->accessToken = $result->access_token;
            $this->accessTokenExpiresIn = $result->expires_in;
        }

        /**
         * @return stdClass An object with the returned data
         */
        public function post($url, $data = array(), $headers = array())
        {
            $url = $this->apiUrl . "/" . rtrim(ltrim($url, "/"), "/");

            /* Add in the content type header */
            $headers["Content-type"] = $this->contentType;

            if (null != $this->accessToken)
            {
                $headers["Authorization"] = "Authorization: Bearer $this->accessToken";
            }

            // use key 'http' even if you send the request to https://...
            $options = array(
                'http' => array(
                    'header' => $headers,
                    'method' => 'POST',
                    'content' => http_build_query($data),
                ),
            );

            $context = stream_context_create($options);
            $result = file_get_contents($url, false, $context);
            return json_decode($result);
        }

    }
    