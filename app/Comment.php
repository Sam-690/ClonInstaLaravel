<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    //Relacion de many to one
    public function user(){
        return $this->belongsTo('App\User','user_id');
     }

     // de many to one
     public function image(){
         return $this->belongsTo('App\User', 'user_id');
     }
}
