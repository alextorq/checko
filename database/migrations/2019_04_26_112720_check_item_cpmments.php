<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CheckItemCpmments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_item_comments', function (Blueprint $table) {
            $table->bigIncrements('comment_id');
            $table->string('content');
            $table->bigInteger('check_item_id')->references('check_item_id')->on('check_items')->onDelete('cascade');
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('check_list_id')->nullable();
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
        Schema::dropIfExists('check_item_comments');
    }
}
