import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Users");
    setAuthUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="dropdown dropdown-end">
      {/* Logout button styled to match Sign in button */}
     

      {/* Dropdown menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-2 p-2 shadow-xl bg-black/95 backdrop-blur-xl rounded-xl w-32 border border-white/20"
      >
        <li>
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-400 font-semibold w-full text-left hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Logout;