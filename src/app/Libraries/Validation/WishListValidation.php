<?php

namespace App\Libraries\Validation;

class WishListValidation extends Validation
{
    public function rulesGetWishList()
    {
        $rules = [
            'user_id' => 'required',
        ];

        $this->rules($rules);
    }

    public function rulesCreateWishList()
    {
        $rules = [
            'user_id' => 'required',
            'product_id' => 'required',
        ];

        $this->rules($rules);
    }

    public function rulesDeleteWishList()
    {
        $rules = [
            'user_id' => 'required',
            'product_id' => 'required',
        ];

        $this->rules($rules);
    }
}
