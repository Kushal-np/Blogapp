import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            // Optional: call backend logout route to clear cookie
            await axios.post("http://localhost:8003/api/v1/auth/logout", {}, {
                withCredentials: true,
            });

            setAuthUser({
                ...authUser,
                user: null,
            });

            localStorage.removeItem("Users");
            toast.success("Logout successful");
            navigate("/login"); // ✅ Redirect after logout
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed");
        }
    }

    return (
        <div>
            <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
