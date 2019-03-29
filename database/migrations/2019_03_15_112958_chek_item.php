<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChekItem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_items', function (Blueprint $table) {
            $table->increments('check_item_id');
            $table->string('name', 500);
            $table->boolean('complete');
            $table->string('description');
            $table->bigInteger('timestamp_id')->unsigned();
            $table->bigInteger('date_complete')->unsigned()->nullable();
            $table->integer('check_list_id')->unsigned();
            $table->foreign('check_list_id')->references('check_list_id')->on('check_lists');
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
        Schema::dropIfExists('check_items');
    }
}
