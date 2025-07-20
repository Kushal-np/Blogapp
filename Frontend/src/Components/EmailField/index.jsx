import { useState } from "react";

function EmailField() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="w-full px-4 py-6 sm:py-8 lg:py-10 flex justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end">
        {/* Email Input Container */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:hidden">
            Email Address
          </label>
          <div className="relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-200">
            <svg
              className="h-5 w-5 text-gray-400 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-none outline-none bg-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={handleSubmit}
          className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default EmailField;