<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $attributes = $request->validated();
        if (!auth()->attempt($request->validated())) {
            return response(['msg' => 'error in login credintials'], 400);
        }


        $user = User::where('email', $attributes['email'])->first();
        auth()->login($user);
        $token = $user->createToken('auth_token')->plainTextToken;
 
        return ['token' => $token, 'msg' => 'user logged successfully'];
    }
}
