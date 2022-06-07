<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Config;

class SSLcryptClass
{
    /**
     * @param string $data
     * @return array
     */
    public function encrypt($data)
    {
        $config = 'public_key.TMN_OCR_PUBLIC_KEY';
        $env    = env('APP_ENV', 'pre-production');
        
        if ($env == 'production') $config .= '_PROD'; 

        $crypttext       = '';
        $encrypt_text    = '';
        $public_key      = Config::get($config);
        $key_resource    = openssl_get_publickey($public_key);

        if (!$key_resource) {
            return false;
        }
      
        openssl_public_encrypt($data, $crypttext, $key_resource);
        $encrypt_text = base64_encode($crypttext);
        
        return $encrypt_text;
    }

    public function encryptTmnCcp($data)
    {
        $config = 'private_key.TMN_OCR_PRIVATE_KEY';
        $env    = env('APP_ENV', 'pre-production');
        
        if ($env == 'production') $config .= '_PROD'; 

        $result_encrypt  = '';
        $key             = Config::get($config);

        if (!empty($key)) {
            $binary_signature = '';
            $algo             = 'SHA256';

            openssl_sign($data, $binary_signature, $key, $algo);
            $result_encrypt = base64_encode($binary_signature);
        }

        return $result_encrypt;
    }
}