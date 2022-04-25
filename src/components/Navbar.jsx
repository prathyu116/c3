import { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
          const { isAuth } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link  style={{ margin: "5px" }} className="nav-home" to="/">
        Home
      </Link>
      <Link  style={{ margin: "5px" }} className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link  style={{ margin: "5px" }} className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link  style={{ margin: "5px" }} className="nav-logout" to="/logout">
        Logout
      </Link>

      <Link  style={{ margin: "5px" }} className="nav-login" to="/login">
        Login
      </Link>
    </div>
  );
};
