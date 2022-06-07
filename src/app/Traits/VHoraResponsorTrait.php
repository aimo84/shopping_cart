<?php
namespace App\Traits;

use App\Facades\ErrorMessages\VHora as VHoraMessages;

trait VHoraResponsorTrait
{
    /**
     * Create error message
     *
     * @param $response_error
     * @param $code
     *
     * @return array
     */
    private function createErrorMessage($response_error = [], $code = null)
    {   
        $errors        = [];
        $result        = [];
        $error_message = VHoraMessages::getMessages($code);

        if (!empty($code) && !empty($error_message)) {
            $errors['message'] = array_merge(['step_code' => $code], $error_message);
        }

        if (!empty($response_error)) {
            $errors['description'] = $response_error;
        }

        if (!empty($errors)) {
            $result['errors'] = $errors;
        }
        
        return $result;
    }
}