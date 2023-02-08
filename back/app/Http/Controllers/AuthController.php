<?php

namespace App\Http\Controllers;

use App\Models\LoginToken;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
        ]);
        User::whereEmail($data['email'])->first()->sendLoginLink();
        session()->flash('success', true);
        return redirect()->back();
    }

    public function verifyLogin(Request $request, $token)
    {
        /**
         * @var LoginToken
         */
        $token = LoginToken::whereToken(hash('sha256', $token))->firstOrFail();

        if ($request->hasValidSignature() && $token->isValid()) return  abort(401);

        $token->consume();
        Auth::login($token->user);
        return redirect('/');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}
