<?php

Route::get('/instantsim', function () {
    return view('instantsim');
})->where('any', '.*');

Route::any('/{any}', function () {
    return view('app');
})->where('any', '.*');
