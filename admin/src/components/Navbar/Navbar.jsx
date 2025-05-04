import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, admin, setAdmin, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <div className="navbar">
      <div>
        <img src={"/food-delivery.png"} alt="" height={40} width={40} />
        <span className="logo">Zubee.</span>
        <br />
        <span className="admin">Admin panel.</span>
      </div>
      {token && admin ? (
        <p className="login-conditon" onClick={logout}>
          Logout
        </p>
      ) : (
        <p className="login-conditon" onClick={() => navigate("/")}>
          Login
        </p>
      )}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
