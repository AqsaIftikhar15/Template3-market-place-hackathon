import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignInForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        <div className="text-center mb-6">
          <Image
            src="/logo2.png"
            alt="Nike Logo"
            layout="intrinsic"
            className="h-auto w-28 mx-auto mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold">YOUR ACCOUNT</h1>
          <p className="text-xl md:text-2xl font-bold">FOR EVERYTHING NIKE</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-500">
              Keep me signed in
            </label>
          </div>

          <div className="mb-4 text-right">
            <a href="#" className="text-gray-500 hover:underline" aria-label="Forgotten your password?">
              Forgotten your password?
            </a>
          </div>

          <div className="text-center">
            <button className="bg-black text-white py-2 px-6 rounded w-full md:px-24 transition-all duration-200 hover:bg-gray-800">
              SIGN IN
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            By logging in, you agree to Nike&apos;s{' '}
            <a href="#" className="text-blue-500 hover:underline" aria-label="Nike Privacy Policy">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:underline" aria-label="Nike Terms of Use">
              Terms of Use
            </a>.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Not a Member?{' '}
            <Link href="/joinus" className="text-blue-500 hover:underline">
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
