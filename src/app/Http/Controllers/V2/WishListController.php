<?php

namespace App\Http\Controllers\V2;
use App\Services\LogService;
use Illuminate\Http\Request;
use App\Facades\WishListService;
use Exception;

class WishListController extends BaseController
{
    public function getWishList(Request $request)
    {
        try {
            $input = $request->all();
            $response = WishListService::getWishList($request->all());
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($input, $e, 'ValidateGetWishList');
        } catch (Exception $e) {
            $response = $this->manageException($input, $e, 'GetWishList');
        }
        return $this->makeResponse(array_get($response, 'response'), array_get($response, 'code'));
    }

    public function createWishList(Request $request)
    {
        try {
            $input = $request->all();
            $response = WishListService::createWishList($request->all());
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($input, $e, 'ValidateCreateWishList');
        } catch (\UnexpectedValueException $e) {
            $response = $this->manageException($input, $e, 'CreateWishListFail');
        } catch (Exception $e) {
            $response = $this->manageException($input, $e, 'CreateWishList');
        }
        return $this->makeResponse(array_get($response, 'response'), array_get($response, 'code'));
    }

    public function deleteWishList(Request $request)
    {
        try {
            $input = $request->all();
            $response = WishListService::deleteWishList($request->all());
        } catch (\InvalidArgumentException $e) {
            $response = $this->manageException($input, $e, 'ValidateDeleteWishList');
        } catch (\UnexpectedValueException $e) {
            $response = $this->manageException($input, $e, 'DeleteWishListFail');
        } catch (Exception $e) {
            $response = $this->manageException($input, $e, 'DeleteWishList');
        }
        return $this->makeResponse(array_get($response, 'response'), array_get($response, 'code'));
    }

    private function manageException($input, $e, $step = ''): array
    {
        $code = $e->getCode();
        $code = $code == 0 ? 406 : $code;
        $message = $e->getMessage();
        LogService::writeServiceLog(
            $step,
            json_encode_unicode($input),
            json_encode_unicode(['message' => $message]),
            date('d/m/Y H:i:s')
        );
        return [
            'response' => $this->createErrorMessage($message),
            'code' => $code
        ];
    }

    private function createErrorMessage($response_error = []): array
    {
        $result = [];
        if ($response_error) {
            $result['errors']['description'] = $response_error;
        }

        return $result;
    }
}
