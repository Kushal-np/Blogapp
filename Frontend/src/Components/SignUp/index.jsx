import { useState } from "react";
import AuthNavbar from "../AuthNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  function handleForm(e) {
    e.preventDefault();
    setIsLoading(true);

    const userInfo = { username, email, password };

    axios.post("https://bookish-767c.onrender.com/api/v1/auth/register", userInfo, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data && res.data.success) {
          toast.success("Signed up successfully");

          if (res.data.user) {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            setAuthUser(res.data.user);
            navigate("/books");
          } else {
            navigate("/login");
          }
        }
      })
      .catch((error) => {
        console.error("❌ Registration error:", error.response?.data || error.message);
        toast.error("Error while registering: " + (error.response?.data?.message || "Unknown error"));
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div>
      <AuthNavbar />
      <div
        className="
          min-h-screen flex justify-center items-center
          bg-gradient-to-tr from-black via-gray-800 to-gray-900
          px-4
        "
      >
        <div
          className="
            w-full max-w-md
            bg-gradient-to-br from-gray-900 to-gray-800
            rounded-3xl
            shadow-lg shadow-black/80
            border border-gray-700
            p-10
            backdrop-blur-sm
          "
          style={{
            background:
              "linear-gradient(145deg, #000000, #1a1a1a, #0d0d0d)",
          }}
        >
          <h2 className="text-center text-3xl font-extrabold mb-8 text-white drop-shadow-md">
            Sign Up
          </h2>
          <form onSubmit={handleForm} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="
                  w-full
                  rounded-xl
                  bg-black
                  border border-gray-600
                  text-white
                  placeholder-gray-500
                  px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-white
                  focus:border-white
                  transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                  shadow-inner
                "
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-xl
                  bg-black
                  border border-gray-600
                  text-white
                  placeholder-gray-500
                  px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-white
                  focus:border-white
                  transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                  shadow-inner
                "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="
                  w-full
                  rounded-xl
                  bg-black
                  border border-gray-600
                  text-white
                  placeholder-gray-500
                  px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-white
                  focus:border-white
                  transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                  shadow-inner
                "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full
                rounded-xl
                bg-gradient-to-r from-white/90 to-gray-300
                text-black font-semibold
                py-3
                shadow-md shadow-white/50
                hover:from-white hover:to-gray-200
                transition
                disabled:opacity-60 disabled:cursor-not-allowed
                ${isLoading ? "loading" : ""}
              `}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white hover:text-gray-300 font-semibold transition"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
