<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', fn () => view('home'))->name('home');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', fn ()  => view('welcome'));
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('verify-login/{token}', [AuthController::class, 'verifyLogin'])->name('verify-login');
});



Route::group(['middleware' => ['guest']], function () {
    Route::get('login', [AuthController::class, 'showLogin'])->name('login.show');
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::get('verify-login/{token}', [AuthController::class, 'verifyLogin'])->name('verify-login');
});
