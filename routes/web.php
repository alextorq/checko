<?php

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

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

Route::get('mail', function () {
    $user = Auth::user();

    Mail::send('emails.reminder', ['user' => $user], function ($m) use ($user) {
        $m->from('hello@app.com', 'Your Application');

        $m->to($user->email, $user->name)->subject('Your Reminder!');
    });

});




Auth::routes();





Route::get('/{front?}', function () {
    return view('welcome');
})->where('front', '[\/\w\.-]*');


