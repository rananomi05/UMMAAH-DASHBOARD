"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await signIn("credentials", {
            username,
            password,
            callbackUrl: "/", // after login, go to homepage (or /dashboard)
        })
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-96">
                <h1 className="text-2xl w-[290px]  font-bold mb- text-center">Welcome back</h1>
                <p className="  mb-4 text-[#636364] text-center">Welcome back! Please enter your details </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h1 className="text-[#181818] ">Email</h1>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-[313px] h-[41px]  p-2 border border-[#C4C4C4] rounded-lg"
                    />
                    <h1 className="text-[#181818] ">Password</h1>

                    <input
                        type="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[313px] h-[41px]  p-2 border border-[#C4C4C4] rounded-lg"
                    />
                    <div className="flex  flex-row ml-1 text-sm text-[#181818]">
                        <p>Remember me</p>
                        <a href="#" className="ml-25  hover:underline">
                            Forgot Password?
                        </a>

                    </div>
                    <button
                        type="submit"
                        className="w-[313px] h-[41px] bg-[#EA454C] text-white py-2 rounded-lg "
                    >
                        Sign in
                    </button>
                    <button
                        type="submit"
                        // onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="w-[313px] h-[41px] border border-[#C4C4C4]  text-[#000000] py-2 rounded-lg "
                    >
                        Sign in with Google
                    </button>
                    <p className="text-center text-sm text-[#636364]">
                        Don't have an account?{" "}
                        <a href="#" className="text-[#EA454C] hover:underline">
                            Register here
                        </a>
                    </p>

                </form>
            </div>
        </div>
    )
}
