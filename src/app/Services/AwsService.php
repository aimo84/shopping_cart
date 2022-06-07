<?php
namespace App\Services;

use Aws\Credentials\CredentialProvider;
use Aws\Crypto\KmsMaterialsProviderV2;
use Aws\Kms\KmsClient;
use Aws\S3\Crypto\S3EncryptionClientV2;
use Aws\S3\Exception\S3Exception;
use Aws\S3\S3Client;

class AwsService
{
    private $bucket;
    private static $config_aws = [
        'region'  => 'ap-southeast-1',
        'version' => 'latest',
    ];
    
    /**
     * Instantiate a new AwsService instance.
     */
    public function __construct()
    {
        $this->bucket = env('S3_AWS_BUCKET', false);
    }

    public static function uploadS3Image($images)
    {
        $bucket     = env('S3_AWS_BUCKET', false);
        $kms_key_id = env('S3_KMS_KEY', false);
        $media_type = [
            'image/gif'  => '.gif',
            'image/jpeg' => '.jpg',
            'image/png'  => '.png',
        ];
        $final_response = [
            400,
            [
                'message' => [
                    'en' => 'Can not upload picture to server.',
                    'th' => 'ไม่สามารถบันทึกรูปภาพได้',
                ],
            ],
        ];
        try {
            $cipher_options = [
                'Cipher'  => 'gcm',
                'KeySize' => 256,
            ];

            $s3_client = new S3EncryptionClientV2(
                new S3Client(self::getConfigAws())
            );

            $materials_provider = new KmsMaterialsProviderV2(
                new KmsClient(self::getConfigAws()),
                $kms_key_id
            );

            foreach ($images as $keyname => $value) {
                $image_information = getimagesizefromstring(base64_decode($value));
                $extension         = array_get($image_information, 'mime');
                $file_extension    = array_get($media_type, $extension, '.jpg');
                $result            = $s3_client->putObject([
                    '@MaterialsProvider'    => $materials_provider,
                    '@CipherOptions'        => $cipher_options,
                    '@SecurityProfile'      => 'V2',
                    '@KmsEncryptionContext' => [],
                    'Bucket'                => $bucket,
                    'Key'                   => $keyname . $file_extension,
                    'Body'                  => base64_decode($value),
                    'ContentType'           => $extension,
                    'ServerSideEncryption'  => 'AES256',
                ]);
            }

            if (array_get($result, '@metadata.statusCode') === 200) {
                $final_response = [
                    200,
                    [
                        'message' => [
                            'en' => 'Saved Image',
                            'th' => 'บันทึกรูปภาพสำเร็จ',
                        ],
                    ],
                ];
            }

            return $final_response;
        } catch (S3Exception $error) {
            LogService::writeServiceLog(
                "s3_upload_picture",
                json_encode_unicode($images),
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        } catch (\Exception $error) {
            LogService::writeServiceLog(
                "s3_upload_picture",
                json_encode_unicode($images),
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        }
    }

    public static function uploadS3($images, $bucket_name = 'MNP')
    {
        $bucket     = env('S3_AWS_BUCKET_' . $bucket_name, false);
        $media_type = [
            'image/gif'       => '.gif',
            'image/jpeg'      => '.jpg',
            'image/png'       => '.png',
            'application/pdf' => '.pdf'
        ];
        $final_response = [
            400,
            json_encode([
                'message' => [
                    'en' => 'Can not upload picture to server.',
                    'th' => 'ไม่สามารถบันทึกรูปภาพได้',
                ],
            ], true),
        ];

        try {
            $s3 = new S3Client(self::getConfigAws());
            // Upload a file with server-side encryption.
            $f = finfo_open();
            foreach ($images as $keyname => $value) {
                $extension         = finfo_buffer($f, base64_decode($value), FILEINFO_MIME_TYPE);
                $file_extension    = array_get($media_type, $extension, '.jpg');
                $result            = $s3->putObject([
                    'Bucket'               => $bucket,
                    'Key'                  => $keyname . $file_extension,
                    'Body'                 => base64_decode($value),
                    'ContentType'          => $extension,
                    'ServerSideEncryption' => 'AES256',
                ]);
            }
            finfo_close($f);

            $result = $result->toArray();

            LogService::writeServiceLog(
                "s3_upload_picture_mnp",
                json_encode_unicode(array_keys($images)),
                json_encode_unicode($result),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            if (array_get($result, '@metadata.statusCode') === 200) {
                $final_response = [
                    200,
                    json_encode([
                        'message'  => [
                            'en' => 'Saved Image',
                            'th' => 'บันทึกรูปภาพสำเร็จ',
                        ],
                        'filename' => $keyname . $file_extension,
                    ], true),
                ];
            }

            return $final_response;
        } catch (S3Exception $error) {
            LogService::writeServiceLog(
                "s3_upload_picture_mnp",
                json_encode_unicode($images),
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        } catch (\Exception $error) {
            LogService::writeServiceLog(
                "s3_upload_picture_mnp",
                json_encode_unicode($images),
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        }
    }

    public static function getS3Image($image_name)
    {
        $bucket   = env('S3_AWS_BUCKET_MNP', false);

        $final_response = [
            400,
            [
                'message' => [
                    'en' => 'Can not get image from server.',
                    'th' => 'ไม่สามารถดึงข้อมูลรูปภาพได้',
                ],
            ],
        ];

        try {
            $s3 = new S3Client(self::getConfigAws());

            $result = $s3->getObject([
                'Bucket' => $bucket,
                'Key'    => $image_name,
            ]);

            return [
                200,
                [
                    'image' => strval($result->get('Body')),
                ],
            ];
        } catch (S3Exception $error) {
            LogService::writeServiceLog(
                "s3_get_picture_mnp",
                $image_name,
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        } catch (\Exception $error) {
            LogService::writeServiceLog(
                "s3_get_picture_mnp",
                $image_name,
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );

            return $final_response;
        }
    }

    /**
     * GetConfigProductDescription
     *
     * @param string $file_name
     * @param string $bucket
     * @return mixed
     */
    public function getS3File($file_name, $bucket)
    {
        if (!empty($bucket)) $this->bucket = $bucket;
        
        $response = [
            'message' => [
                'en' => 'Can not get image from server.',
                'th' => 'ไม่สามารถดึงข้อมูลได้',
            ],
        ];

        try {
            $s3_client = new S3Client(self::getConfigAws());
            
            $result = $s3_client->getObject([
                'Bucket' => $bucket,
                'Key'    => $file_name,
            ]);

            $response = ['body' => strval($result->get('Body'))];
        } catch (S3Exception $error) {
            LogService::writeServiceLog(
                "s3_get_file",
                $file_name,
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        } catch (\Exception $error) {
            LogService::writeServiceLog(
                "s3_get_file",
                $file_name,
                json_encode_unicode($error->getMessage()),
                (new \DateTime())->format('d/m/Y H:i:s')
            );
        }

        return $response;
    }

    public static function getConfigAws()
    {
        if (env('APP_DEBUG') === true) return array_set(self::$config_aws, 'credentials', CredentialProvider::env());

        return self::$config_aws;
    }
}
