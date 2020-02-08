<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    public function answers()
    {
        return $this->hasMany(Answer::class, 'quote_id');
    }
}
