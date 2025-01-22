import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <div className="text-center mb-4">
          {/* Adjusted logo size and margin */}
          <Image
            src="/logo2.png"
            alt="Nike Logo"
            width={64} 
            height={64} // Image height (16 * 4)
            className="mx-auto mb-2" 
          />
          <h2 className="text-2xl font-bold text-black">BECOME A NIKE MEMBER</h2>
          <p className="text-gray-600">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Country</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="flex mb-4">
            <label className="mr-4">
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required /> Female
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            By creating an account, you agree to Nike&apos;s <Link href="#" className="text-black">Privacy Policy</Link> and <Link href="#" className="text-black">Terms of Use</Link>.
          </p>
          <button className="w-full p-2 bg-black text-white font-bold rounded hover:bg-gray-800">
            JOIN US
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already a Member? <Link href="#" className="text-black">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
