<?php

//v2
Route::group(['prefix' => '/true/v2', 'namespace' => 'V2'], function () {
    Route::get('/store-pickup/nearme', 'StorePickupController@nearme');
    Route::get('/payment-methods', 'PaymentMethodController@getPaymentMethods');

    Route::prefix('/vhora')->group(function () {
        Route::post('/request-otp', 'VHoraController@postRequestOtp');
        Route::post('/verify', 'VHoraController@verify');
        Route::post('/post-personalize-funtong', 'VHoraController@postPersonalizeFuntong');
        Route::post('/mobile-numbers', 'VHoraController@postTempReserve');
        Route::post('/fortune-funtong', 'VHoraController@getFortuneFuntong');
        Route::post('/fortune-funtong-redis', 'VHoraController@getFortuneFuntongForRedis');
        Route::post('/funtong', 'VHoraController@funtong');
        Route::post('/mobile-numbers/temp-reserve', 'VHoraController@tempReserveLowTier');
        Route::post('/prophecy', 'VHoraController@postProphecy');
        Route::post('/resend-email', 'VHoraController@postResendEmail');

        Route::prefix('/offline')->group(function () {
            Route::get('/login', 'VHoraController@postLogin');
            Route::get('/logout', 'VHoraController@getAuthenticationLogout');
            Route::get('/dealer-info', 'VHoraController@getDealerInfo');
            Route::post('/verify', 'VHoraController@postVerify');
            Route::post('/authentication', 'VHoraController@postAuthentication');
            Route::get('/auth-channel', 'VHoraController@getAuthChannel');
            Route::post('/placeorder', 'VHoraController@postPlaceOrderOffline');
        });
    });
    Route::prefix('/sale')->group(function () {
        Route::post('/sms', 'SaleController@postSaleSms');
        Route::post('/qr', 'SaleController@postSaleQr');
        Route::post('/validate-shop-code', 'SaleController@postValidateShopCode');
    });

    Route::prefix('/wishlist')->group(function () {
        Route::get('/', 'WishListController@getWishList');
        Route::post('/', 'WishListController@createWishList');
        Route::delete('/', 'WishListController@deleteWishList');
    });

    Route::get('/qrcode/status', 'QrCodeController@getOrder');
    Route::post('/qrcode/status', 'QrCodeController@postStatus');

    Route::prefix('/search')->group(function () {
        Route::get('/suggestion', 'SearchController@getSearchSuggestion');
        Route::get('/history', 'SearchController@getSearchHistory');
        Route::post('/history', 'SearchController@setSearchHistory');
        Route::delete('/history', 'SearchController@deleteSearchHistory');
    });
});

// Master Data
Route::get('/true/address/suggestion/{suggest_type}', 'AddressSuggestionController@getSuggestion');

Route::get('/true/university', 'AddressSuggestionController@getUniversityList');

Route::post('/true/check/address', 'AddressSuggestionController@postAddressCheck');

// Order
Route::post('/true/placeorder', 'OrderDetailController@store');
Route::get('/true/tracking/{secure_key}', 'OrderDetailController@show');
Route::get('/true/tracking/success/{secure_key}', 'OrderDetailController@getTrackingSuccess');
Route::get('/true/tracking/success/pdf/{secure_key}', 'OrderDetailController@getPDFSuccess');
Route::get('/true/order/history', 'OrderDetailController@getOrderHistory');
Route::post('/true/success', 'APIController@postSuccess');
Route::get('/true/qrcode', 'OrderDetailController@getFetchQRcode');

// Auth
Route::post('/true/login', 'APIController@postLogin');
Route::get('/true/profile', 'APIController@getProfile');

// Privilege
Route::get('/true/privilege/{cart_id}', 'APIController@getPrivilege');

// Tol Self Service
Route::post('/true/verify/tol_ssv_blacklist', 'TolSelfServiceController@postVerifyTolSsvBlacklistTol');

Route::prefix('/true/tmvh')->group(function () {
    Route::get('/tol-ssv/get-service-coverage', 'TolSelfServiceController@getServiceCoverage');
    Route::post('/tol-ssv/get-appointment-info', 'TolSelfServiceController@getAppointmentInfo');
    Route::post('/tol-ssv/register/{param_correlation_id}', 'TolSelfServiceController@registerTrueOnlineProduct');
    Route::get('/tol-ssv/get-enquiry-order-status', 'TolSelfServiceController@getEnquiryOrderStatus');
});

Route::prefix('/true/pay-smooth')->group(function () {
    Route::post('/verify', 'PaySmoothController@postVerify');
});

Route::prefix('/true/tol')->group(function () {
    Route::post('/check-blacklist-retrieve-calendar', 'TolSelfServiceController@checkBlackListandPendingStatus');
    Route::get('/check-customer-appointment', 'TolSelfServiceController@checkCustomerAppointment');
    Route::post('/register-order', 'TolSelfServiceController@registerOrder');
    Route::post('/check-otp-update-status', 'TolSelfServiceController@checkInstallationStatus');
    Route::post('/check-otp', 'TolSelfServiceController@checkInstallationStatus');
    Route::post('/get-address', 'TolSelfServiceController@getAddressforRegister');
    Route::post('/change-due-date', 'TolSelfServiceController@changeInstallationDate');
    Route::post('/retrive-new-timeslot', 'TolSelfServiceController@retriveNewTimeslot');
});

Route::prefix('/true/mnp')->group(function () {
    // MNP
    Route::post('/check-otp', 'MNPController@checkOtpMNP');
    Route::post('/verify-pin-code', 'MNPController@verifyPinCodeMNP');
    Route::post('/verify-personal-information', 'MNPController@verifyPersonalInformationMNP');
    Route::post('/placeorder', 'MNPController@placeOrderMNP');
});

Route::prefix('/true/mnp/bundling')->group(function () {
    // MNP Bundling
    Route::get('/random/mobile/nas', 'MNPController@getRandomMobileNas');
    Route::get('/priceplan/code/ticket', 'MNPController@getPricePlanCodeTicket');
    Route::post('/verify', 'MNPController@postVerifyMNPBundling');
});

Route::get('/true/get-service-area', 'TolSelfServiceController@getServiceArea');
Route::get('/true/mockFunction', 'TolSelfServiceController@mockFunction');

// weomni TolSelf Service
Route::post('/true/uaa/oauth/token', 'TolSelfServiceController@postRequestAccessToken');
Route::get('/true/tol-product-list-content', 'TolSelfServiceController@tolProductListContent');
Route::get('/true/tol-product-get-content', 'TolSelfServiceController@tolProductListContentwithContentId');
Route::get('/true/tol-register-list-content', 'TolSelfServiceController@tolRegisterListContent');
Route::post('/true/tol-register-create-content', 'TolSelfServiceController@tolRegisterCreateContent');
Route::put('/true/tol-register-update-content', 'TolSelfServiceController@tolRegisterUpdateContent');

// Clm up pack
Route::prefix('/true/clm')->group(function () {
    Route::post('/get-camp-trans-clm-list', 'ClmController@postGetCampTransClmList');
    Route::get('/validate-change-price-plan', 'ClmController@getValidateChangePricePlan');
    Route::get('/search-price-plan', 'ClmController@getSearchPricePlan');
    Route::post('/get-mobile-offer-inventory', 'ClmController@postGetMobileOfferInventory');
    Route::post('/order-change-price-plan/{param1}', 'ClmController@postOrderChangePricePlan');
    Route::post('/get-billing-profile-info', 'ClmController@getBillingProfileInfo');
    Route::post('/callback/add-leads', 'ClmController@postAddLeads');
    Route::post('/preview/list-package', 'ClmController@getPreviewListPackage');
    Route::post('/preview/benefit-on-top', 'ClmController@getPreviewBenefitOnTop');
    Route::post('/get-campaign-instant-benefit', 'ClmController@postGetCampaignInstantBenefit');
});

Route::prefix('/true/clm-up-pack')->group(function () {
    Route::post('/verify', 'ClmController@postVerify');
    Route::post('/verify-mobile-only', 'ClmController@postVerifyMobileOnly');
    Route::post('/get-current-package', 'ClmController@postGetCurrentPackage');
    Route::post('/list-package', 'ClmController@postListPackage');
    Route::post('/confirm-new-package', 'ClmController@postConfirmNewPackage');
    Route::post('/success', 'ClmController@postSuccess');
    Route::post('/benefit-on-top', 'ClmController@getBenefitOnTop');
});

Route::prefix('/true/toggle')->group(function () {
    Route::get('/omise', 'OmiseController@getToggleOmise');
});

Route::prefix('/true/sim-activation')->group(function () {
    Route::post('/verify', 'SimActivationController@postVerify');
    Route::post('/deeplink', 'SimActivationController@postDeeplink');
    Route::post('/create-sim', 'SimActivationController@postCreateSim');
    Route::post('/submit', 'SimActivationController@postSubmit');
    Route::post('/postpaid/verify', 'SimActivationController@postPostpaidVerify');
});

// lucky9999
Route::prefix('/true/lucky9999')->group(function () {
    Route::get('/config', 'APIController@getLucky9999');
});

// shipping address
Route::prefix('/true/shipping_address')->group(function () {
    Route::get('/user/{user_id}', 'ShippingAddressController@getShippingaddress');
    Route::post('/user/{user_id}', 'ShippingAddressController@postShippingaddress');
    Route::put('/user/{user_id}/address/{address_id}', 'ShippingAddressController@putShippingaddress');
    Route::delete('/user/{user_id}/address/{address_id}', 'ShippingAddressController@deleteShippingaddress');
});

Route::prefix('/true/{service}')->group(function () {
    Route::post('/verify', 'ClmVasController@postVerify');
    Route::post('/list-package', 'ClmVasController@postListPackage');
    Route::post('/confirm-new-package', 'ClmVasController@postConfirmNewPackage');
    Route::post('/success', 'ClmVasController@postSuccess');

    Route::post('/preview/list-package', 'ClmVasController@postPreviewListPackage');
});

Route::prefix('/true/creditok')->group(function () {
    Route::post('/callback/submit', 'CreditokController@postCallbackSubmit');
    Route::post('/create-application', 'CreditokController@postCreateApplication');
    Route::get('/get-status/{ekyc_hash}', 'CreditokController@getStatus');
    Route::post('/retrieve-consent', 'CreditokController@postRetrieveConsent');
    Route::post('/save-consent', 'CreditokController@postSaveConsent');

});

Route::prefix('/true/typhoon')->group(function () {
    Route::put('/ent_pack', 'TyphoonController@putEntPack');
    Route::post('/ent_pack/placeorder', 'TyphoonController@postEntPackPlaceorder');
});

Route::post('/true/verify/pre_to_post', 'PreToPostController@postVerify');
Route::post('/true/check/pre_to_post', 'PreToPostController@postCheck');
Route::post('/true/verify/pre_to_post/pre_ekyc', 'PreToPostController@verifyPreEkyc');
Route::post('/true/placeorder/pre_to_post/ss', 'PreToPostController@placeorderSs');
Route::get('/true/get/order/pre_to_post/ss/{order_id}', 'PreToPostController@getOrder');
Route::get('/true/q_and_a/config', 'PreToPostController@getQandA');

Route::post('/true/logger', 'ElsaController@sendLog');
Route::post('/true/verify/restriction', 'RestrictionController@postVerify');

Route::post('/true/save-temp-content', 'APIController@postSaveTempContentToS3');

Route::post('/true/placeorder/credit_card', 'CreditCardController@postSetRedis');

Route::post('/true/pre_ekyc/placeorder', 'PlaceorderController@postPreEkycPlaceorder');
Route::get('/true/ekyc/status/placeorder/ekyc_hash', 'PlaceorderController@getEkycStatusPlaceorder');

Route::get('/true/wportal/campaign/flashsale', 'LvCController@getPortalCampaignFlashsale');
Route::get('/true/wportal/campaign/{id}', 'LvCController@getPortalCampaign');
Route::get('/true/wportal/campaign/flashsale', 'LvCController@getPortalCampaignFlashsale');
Route::get('/true/wportal/content', 'LvCController@getPortalContent');
Route::get('/true/wportal/content/main-menu', 'LvCController@getMenuContent');
Route::get('/true/truemoveh/mobile/pattern', 'LvCController@getMobilePattern');
Route::get('/true/content-partner/{id}', 'LvCController@getContentPartner');
Route::get('/true/content-list/{id}', 'LvCController@getContentList');
Route::get('/true/level-a', 'LvAController@getLevelAContent');

Route::get('/true/product-verify-esim/{product_id}', 'ProductVerifyEsimController@getProductVerifyEsim');
Route::get('/true/advertisement', 'AdvertisementController@getAdvertisement');
Route::post('/true/stock-reminder', 'StockReminderController@postSaveStockReminder');

// Package List
Route::get('/true/package-list/group', 'PackageListController@group');

// Call wemall API
Route::any('/true/{url}', 'APIController@callAPI')->where('url', '.*');
