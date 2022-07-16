<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = auth()->user();
            return response()->json($user);
        }
        return response()->json(['message' => 'Email atau password salah'], 400);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out']);
    }
}
