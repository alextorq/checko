<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOwnerListToComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('check_item_comments', function (Blueprint $table) {
            $table->integer('check_list_owner')->nullable()->after('check_list_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('check_item_comments', function (Blueprint $table) {
            $table->dropColumn('check_list_owner');
        });
    }
}
