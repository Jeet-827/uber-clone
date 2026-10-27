
import React, { useState } from "react";

function Register() {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPass, setShowPass] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white">
            <span className="text-2xl font-bold">R</span>
          </div>

          <h1 className="text-3xl font-bold text-black">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Register to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

         <div>
  <label className="mb-2 block text-sm font-medium text-black">
    Password
  </label>

  <div className="relative">
    <input
      type={showPass ? "text" : "password"}
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      autoComplete="current-password"
      required
      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
    />

    <button
      type="button"
      onClick={() => setShowPass(!showPass)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black"
      aria-label={showPass ? "Hide password" : "Show password"}
    >
      {showPass ? "Hide" : "Show"}
    </button>
  </div>
</div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              minLength={8}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-black underline underline-offset-4"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;
