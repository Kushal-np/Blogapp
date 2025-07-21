import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem("Users");
        
        // 🔥 IMPORTANT: Update context state immediately
        setAuthUser(null);
        
        // Show success message
        toast.success("Logged out successfully");
        
        // Navigate to home page
        navigate("/");
    };

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-content text-sm font-bold">
                        {authUser?.username?.charAt(0) || authUser?.email?.charAt(0) || "U"}
                    </span>
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-300">
                
                    <button onClick={handleLogout} className="text-error">
                        Logout
                    </button>
               
            </ul>
        </div>
    );
}

export default Logout;