<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('bookables', 'Api\BookableController@index');
// Route::get('bookables/{id}', 'Api\BookableController@show');

Route::apiResource('bookables', 'Api\BookableController')->only(['index', 'show']);

Route::get('bookables/{bookable}/availability', 'Api\BookableAvailController')->name('bookable.availability.show');
Route::get('bookables/{bookable}/reviews', 'Api\BookableReviewController')->name('boolable.reviews.index');
Route::get('bookables/{bookable}/price','Api\BookablePriceController')->name('bookables.price.show');

Route::get('/booking-by-review/{reviewKey}','Api\BookingByReviewController')->name('booking.by-review.show');
Route::apiResource('reviews','Api\ReviewController')->only('show','store');
