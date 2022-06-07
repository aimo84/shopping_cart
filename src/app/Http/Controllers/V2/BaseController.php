<?php

namespace App\Http\Controllers\V2;

use App\Http\Controllers\Controller;
use App\Services\LogService;

class BaseController extends Controller
{
    public function makeResponse($response = [], $status_code = 500)
    {
        $data = [
            'status_code' => $status_code,
            'status_txt'  => $this->getResponseStatus($status_code),
        ];

        return response(array_merge($data, $response), $status_code);
    }

    /**
     * Get response status
     * @param $code
     */
    private function getResponseStatus($code)
    {
        $status_reason = [
            0    => 'OK',
            100  => 'Continue',
            101  => 'Switching Protocols',
            102  => 'Processing',
            200  => 'OK',
            201  => 'Created',
            202  => 'Accepted',
            203  => 'Non-Authoritative Information',
            204  => 'No Content',
            205  => 'Reset Content',
            206  => 'Partial Content',
            207  => 'Multi-Status',
            226  => 'IM Used',
            300  => 'Multiple Choices',
            301  => 'Moved Permanently',
            302  => 'Found',
            303  => 'See Other',
            304  => 'Not Modified',
            305  => 'Use Proxy',
            306  => 'Reserved',
            307  => 'Temporary Redirect',
            400  => 'Bad Request',
            401  => 'Unauthorized',
            402  => 'Payment Required',
            403  => 'Forbidden',
            404  => 'Not Found',
            405  => 'Method Not Allowed',
            406  => 'Not Acceptable',
            407  => 'Proxy Authentication Required',
            408  => 'Request Timeout',
            409  => 'Conflict',
            410  => 'Gone',
            411  => 'Length Required',
            412  => 'Precondition Failed',
            413  => 'Request Entity Too Large',
            414  => 'Request-URI Too Long',
            415  => 'Unsupported Media Type',
            416  => 'Requested Range Not Satisfiable',
            417  => 'Expectation Failed',
            422  => 'Unprocessable Entity',
            423  => 'Locked',
            424  => 'Failed Dependency',
            426  => 'Upgrade Required',
            429  => 'Too Many Requests',
            500  => 'Internal Server Error',
            501  => 'Not Implemented',
            502  => 'Bad Gateway',
            503  => 'Service Unavailable',
            504  => 'Gateway Timeout',
            505  => 'HTTP Version Not Supported',
            506  => 'Variant Also Negotiates',
            507  => 'Insufficient Storage',
            510  => 'Not Extended'
        ];

        return $status_reason[$code];
    }
}
