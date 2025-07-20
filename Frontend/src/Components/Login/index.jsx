import { useState } from "react";
import AuthNavbar from "../AuthNavbar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();

        const userInfo = {
            email,
            password
        };

        axios.post("http://localhost:8003/api/v1/auth/login", userInfo, {
            withCredentials: true,
        })
        .then((res) => {
            if (res.data.success) {
                toast.success("Signed in successfully")
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            } else {
                alert("Login failed!");
            }
        })
        .catch((error) => {
            console.error("❌ Login error:", error.response?.data || error.message);
            toast.error("Login failed: " + (error.response?.data?.message || "Unknown error"));
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    <Link to="/">Sign in</Link>
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
