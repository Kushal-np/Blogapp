import { useState } from "react";
import AuthNavbar from "../AuthNavbar";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Add useNavigate hook

    function handleForm(e) {
        e.preventDefault();

        const userInfo = {
            username,
            email,
            password
        };

        axios.post("http://localhost:8003/api/v1/auth/register", userInfo, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            if(res.data){
                toast.success("Signed up successfully");
                localStorage.setItem("Users", JSON.stringify(res.data));
                // Navigate to login page after successful signup
                navigate("/login");
            }
        })
        .catch((error) => {
            console.error("❌ Registration error:", error.response?.data || error.message);
            toast.error("Error while registering: " + (error.response?.data?.message || "Unknown error"));
        });
    }

    return (
        <div>
            <AuthNavbar />
            <div className="min-h-screen flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Sign Up</h2>
                        <form onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label" htmlFor="username">
                                    <span className="label-text">Username</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username"
                                    placeholder="Enter your username here" 
                                    className="input input-bordered w-full"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-4">
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
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <p className="text-center text-sm">
                            Already have an account? 
                            <Link to="/login" className="link link-primary ml-1">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Signup;