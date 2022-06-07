<?php

namespace App\Libraries\RequestData;

use App\Libraries\Validation\WishListValidation;

class WishListRequest extends BaseRequest
{
    public function setRequestGetWishList($input)
    {
        $validation = new WishListValidation();
        $validation->parameter($input);
        $validation->rulesGetWishList();
        $validation->exec();

        $this->setRequest($input);
    }

    public function setRequestCreateWishList($input)
    {
        $validation = new WishListValidation();
        $validation->parameter($input);
        $validation->rulesCreateWishList();
        $validation->exec();

        $this->setRequest($input);
    }

    public function setRequestDeleteWishList($input)
    {
        $validation = new WishListValidation();
        $validation->parameter($input);
        $validation->rulesDeleteWishList();
        $validation->exec();

        $this->setRequest($input);
    }
}
