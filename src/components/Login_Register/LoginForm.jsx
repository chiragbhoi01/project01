import React, { useState } from 'react';

import loginbackground from '/images/Login-RegisterImage/loginbackground.avif'; // Import the background image
import loginright from '/images/Login-RegisterImage/loginright.avif'; // Import the right-side image

function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({});
  const [islogin, setIsLogin] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginForm = (e) => {
    const { name, value } = e.target;
    setIsLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const isValidation = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {};

    if (!islogin.email) {
      newErrors.email = 'Email is required';
    } else if (!islogin.email.match(regexEmail)) {
      newErrors.email = 'Invalid email format';
    }

    if (!islogin.password) {
      newErrors.password = 'Password is required';
    } else if (islogin.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;  // Only return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = isValidation();
    if (isValid) {
      console.log('Form submitted with:', islogin);
      // Add your actual login logic here (e.g., API call)
    }
  };

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex items-center justify-center">
      <div className="flex w-full bg-gradient-to-r from-[#f87060] to-[#102542] rounded-lg shadow-lg overflow-hidden">
        {/* Left side image */}
        <div className="flex w-1/2">
          <img src={loginright} className="w-full h-full object-cover" alt="Login Right Side" />
        </div>

        {/* Right side form */}
        <div
          style={{
            background: `url(${loginbackground})`,  // Correct background image URL syntax
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff'
          }}
          className="flex items-center justify-center w-1/2 bg-cover"
        >
          <form onSubmit={handleSubmit} className="w-full p-12 space-y-6 bg-opacity-60 bg-[#102542] rounded-xl">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold text-white">WELCOME BACK!</h2>
              <p className="text-lg text-white">Please log in to your account</p>

              <div className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg text-white">Email</label>
                  <input
                    className="p-3 rounded-xl bg-gray-200 w-full focus:ring-2 focus:ring-[#f87060]"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    onChange={loginForm}
                    value={islogin.email}
                  />
                  {/* Displaying Error Message for Email */}
                  {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
                </div>

                {/* Password Input */}
                <div className="space-y-2 relative">
                  <label htmlFor="password" className="text-lg text-white">Password</label>
                  <input
                    className="p-3 rounded-xl bg-gray-200 w-full focus:ring-2 focus:ring-[#f87060] placeholder:caret-black"
                    type={passwordVisible ? 'text' : 'password'} // Toggle type based on passwordVisible
                    placeholder="Enter your password"  
                    name="password"
                    id="password"
                    onChange={loginForm}
                    value={islogin.password}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#f87060]"
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </button>
                  {/* Displaying Error Message for Password */}
                  {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button type="submit" className="bg-[#f87060] text-white p-3 w-full rounded-xl hover:bg-[#f55b4f] transition">
                    Sign In
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                  <a href="/forgot-password" className="text-white text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
