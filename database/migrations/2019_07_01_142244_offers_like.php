<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class OffersLike extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers_likes_users', function (Blueprint $table) {
            $table->increments('offer_likes_id');
            $table->unsignedBigInteger('post_id')->references('post_id')->on('offers_post')->onDelete('cascade');
            $table->longText('users_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers_likes_users');
    }
}
