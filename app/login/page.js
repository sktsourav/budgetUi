"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import MainLogo from '../utils/images/MainLogo.png'
import { useState } from 'react';
import { loginApiResponse } from './server.js'

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await loginApiResponse(username, password)
        console.log("response", response.data);
        if (response.data.statusCode === 200) {
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("sessionId", response.data.sessionId);
            window.localStorage.setItem("username", response.data.username);
            router.push('/userlanding')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px6 lg:px-8">
            <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow">
                <Image className="mx-auto h-10 w-auto"
                    src={MainLogo}
                    alt="Company Logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

                <div className="mt-10">
                    <div className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="username"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button onClick={handleLogin} className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
                            Sign in
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Not a member?
                        <Link href="Sign Up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-400 underline">Sign Up</Link>
                    </p>
                    <p className="text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-400 underline">
                        <Link href="/">Home</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

