import { useState } from "react";
import AuthNavbar from "../AuthNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider"; // Import useAuth

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [authUser, setAuthUser] = useAuth(); // Get auth context

    function handleForm(e) {
        e.preventDefault();
        setIsLoading(true);

        const userInfo = {
            email,
            password
        };

        axios.post("http://localhost:8003/api/v1/auth/login", userInfo, {
            withCredentials: true,
        })
        .then((res) => {
            if (res.data.success) {
                toast.success("Signed in successfully");
                
                // Update localStorage
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                
                // 🔥 IMPORTANT: Update context state immediately
                setAuthUser(res.data.user);
                
                // Navigate to books page after successful login
                navigate("/books");
            } else {
                toast.error("Login failed!");
            }
        })
        .catch((error) => {
            console.error("❌ Login error:", error.response?.data || error.message);
            toast.error("Login failed: " + (error.response?.data?.message || "Unknown error"));
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div>
            <AuthNavbar />
            <div className="min-h-screen flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Sign In</h2>
                        <form onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label" htmlFor="email">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Enter your email here" 
                                    className="input input-bordered w-full"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label" htmlFor="password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    placeholder="Enter your password" 
                                    className="input input-bordered w-full"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button 
                                    type="submit" 
                                    className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <p className="text-center text-sm">
                            Don't have an account? 
                            <Link to="/signup" className="link link-primary ml-1">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Login;