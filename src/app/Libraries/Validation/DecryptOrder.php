<?php

namespace App\Libraries\Validation;
use Exception;

class DecryptOrder
{
    /**
     * decrypt order_code
     *
     * @param  string  $value
     * @return mixed
     */
    public function decrypt($value)
    {
        try {
            $response = decrypt($value);
        } catch (Exception $error) {
            $response = [
                'code'    => 400,
                'message' => json_encode(['order_code' => [$error->getMessage()]])
            ];
        }

        return $response;
    }
}
