import { useState } from "react";
import login1 from "../../assets/image/Login-RegisterImage/login1.avif"; 
import login2 from "../../assets/image/Login-RegisterImage/login2.avif"; 
import login3 from "../../assets/image/Login-RegisterImage/login3.avif"; 
import backgroundImage from "../../assets/image/Login-RegisterImage/backgroundlogin.jpg"; 

const ImageBlock = ({ src, alt }) => (
  <img
    className="w-full h-[250px] object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
    src={src}
    alt={alt}
  />
);

function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState({});

  const myForm = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = isValidation();
    if (Object.keys(newError).length) {
      return;
    }
    // Proceed with form submission, e.g., send data to an API
  };

  const isValidation = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {};

    if (!input.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!input.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!input.email) {
      newErrors.email = "Email is required";
    } else if (!input.email.match(regexEmail)) {
      newErrors.email = "Invalid email address";
    }
    if (!input.password) {
      newErrors.password = "Password is required";
    } else if (input.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (!input.confirmpassword) {
      newErrors.confirmpassword = "Confirm password is required";
    } else if (input.password !== input.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }
    setError(newErrors);
    return newErrors;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="min-h-screen flex items-center justify-center max-w-screen-lg mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {/* Left Column with Images */}
          <div className="space-y-5">
            <ImageBlock
              src={login1}
              alt="Top Image"
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              <ImageBlock
                src={login2}
                alt="Bottom Left"
              />
              <ImageBlock
                src={login3}
                alt="Bottom Right"
              />
            </div>
          </div>

          {/* Right Column with Form */}
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md shadow-sm p-8 rounded-lg bg-white bg-opacity-80"
              style={{ height: "auto" }} // Ensure it adapts to content height
            >
              <h2 className="text-2xl font-semibold text-black text-center mb-6">
                Welcome To Our Family <br />
                <span className="text-blue-950">Miss Gypsy</span> <br />
                <span className="text-blue-950">Register</span>
              </h2>
              <div className="space-y-5 relative">
                <div>
                  <label className="pb-1 block text-blue-950">First Name</label>
                  <input
                    className="block w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="firstName"
                    placeholder="Enter your First Name"
                    onChange={myForm}
                    value={input.firstName}
                  />
                  <p className="absolute text-red-400 text-xs">
                    {error.firstName}
                  </p>
                </div>

                <div>
                  <label className="pb-1 block text-blue-950">Last Name</label>
                  <input
                    className="block w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    onChange={myForm}
                    value={input.lastName}
                  />
                  <p className="absolute text-red-400 text-xs">
                    {error.lastName}
                  </p>
                </div>

                <div>
                  <label className="pb-1 block text-blue-950">Email</label>
                  <input
                    className="block w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    onChange={myForm}
                    value={input.email}
                  />
                  <p className="absolute text-red-400 text-xs">{error.email}</p>
                </div>

                <div>
                  <label className="block pb-1 text-blue-950">Password</label>
                  <input
                    className="block w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={myForm}
                    value={input.password}
                  />
                  <p className="absolute text-red-400 text-xs">
                    {error.password}
                  </p>
                </div>

                <div>
                  <label className="block pb-1 text-blue-950">
                    Confirm Password
                  </label>
                  <input
                    className="block w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm your Password"
                    onChange={myForm}
                    value={input.confirmpassword}
                  />
                  <p className="absolute text-red-400 text-xs">
                    {error.confirmpassword}
                  </p>
                </div>

                <div>
                  <button className="p-3 w-full mx-auto bg-blue-950 text-white rounded-lg transition-all duration-300 hover:bg-blue-700">
                    Register Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
