<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class PlatformUser extends Model
{
    protected $fillable = ['clerk_id', 'name', 'email', 'role'];
}