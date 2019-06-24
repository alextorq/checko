<?php

namespace App\Jobs;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $user;
    private $params;
    /**
     * Create a new job instance.
     * @param User $user
     * @param $params[]
     * @return void
     */
    public function __construct(User $user, Array $params)
    {
        $this->user = $user;
        $this->params = $params;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::send($this->params['view'], ['user' => $this->user], function ($m)  {
            $m->to($this->user->email, $this->user->name)->subject($this->params['subject']);
        });
    }
}
