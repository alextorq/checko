<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 22.05.19
 * Time: 10:43
 */

namespace App\Events;
use \App\Checko\Models\CheckItem;

class UpdateCheckItem
{

    public $checkItem;

    /**
     * Создать новый экземпляр события.
     *
     * @param  CheckItem  $checkItem
     * @return void
     */
    public function __construct(CheckItem $checkItem)
    {
        $this->checkItem = $checkItem;
    }
}