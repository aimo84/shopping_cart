<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default DynamoDb Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the DynamoDb connections below you wish
    | to use as your default connection for all DynamoDb work.
    */

    'default' => env('DYNAMODB_CONNECTION', 'aws'),

    /*
    |--------------------------------------------------------------------------
    | DynamoDb Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the DynamoDb connections setup for your application.
    |
    | Most of the connection's config will be fed directly to AwsClient
    | constructor http://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.AwsClient.html#___construct
    */

    'connections' => [
        'aws' => [
            'region' => 'ap-southeast-1'
        ],
        'local' => [
            'credentials' => [
                'key' => 'DUMMYIDEXAMPLE',
                'secret' => 'DUMMYEXAMPLEKEY'
            ],
            'endpoint' => env('DYNAMODB_LOCAL_ENDPOINT'),
            'region' => 'us-west-2'
        ]
    ],
];
