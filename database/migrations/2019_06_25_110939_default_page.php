<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DefaultPage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('default_pages', function (Blueprint $table) {
            $table->increments('page_id');
            $table->string('pagetitle');
            $table->string('longtitle')->nullable();
            $table->string('introtext')->nullable();
            $table->string('description')->nullable();
            $table->string('slug');
            $table->boolean('publish');
            $table->longText('content')->nullable();
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
        Schema::dropIfExists('default_pages');
    }
}
