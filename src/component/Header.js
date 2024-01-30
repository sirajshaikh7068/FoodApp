import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";
import { CARTICON_URL } from "../utils/constants";
import UserContext from "../utils/UerContext";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const { userName } = useContext(UserContext);

  return (
    <div className="header  flex items-center  justify-between  bg-slate-300 shadow-xl border h-20 list-none sticky top-0 z-50">
      <div className="logo-container flex gap-6">
        <Link to="/">
          <img
            className="logo w-24 hover:scale-105 "
            src={LOGO_URL}
            alt="logo"
          ></img>
        </Link>
        <li className="pt-4 "> {userName}</li>
      </div>

      <div className="nev-Item flex justify-between gap-10 hover:cursor-auto mx-8 list-none ">
        <li>
          <Link to="/filtersearch">Search</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <Link to="/cart">
          <li className="px-3 py-2  text-gray-700 relative text-2xl">
            <FaCartShopping color="red" />

            <span className="absolute text-sm font-bold text-white bg-orange-600 px-1 right-1 top-[-1px] rounded-full">
              {cartItems.length}
            </span>
          </li>
        </Link>

        <button
          className="login-btn border bg-sky-400 p-1"
          onClick={() => {
            loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
          }}
        >
          {loginbtn}
        </button>

        <li className="rounded-full bg-black px-1 py-1  ">
          <DarkMode />
        </li>
      </div>
    </div>
  );
};

export default Header;
