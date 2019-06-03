<?php

namespace App\Observers;

use \App\Checko\Models\CheckItem;

class CheckItemObserver
{
    /**
     * Handle the check item "created" event.
     *
     * @param  \App\Checko\Models\CheckItem  $checkItem
     * @return void
     */
    public function created(CheckItem $checkItem)
    {
        $checkItem->cheklist()->touch();
    }

    /**
     * Handle the check item "updated" event.
     *
     * @param  \App\Checko\Models\CheckItem $checkItem
     * @return void
     */
    public function updated(CheckItem $checkItem)
    {
        $checkItem->cheklist->touch();
    }

    /**
     * Handle the check item "deleted" event.
     *
     * @param  \App\Checko\Models\CheckItem  $checkItem
     * @return void
     */
    public function deleted(CheckItem $checkItem)
    {
        $checkItem->cheklist->touch();
    }
}
