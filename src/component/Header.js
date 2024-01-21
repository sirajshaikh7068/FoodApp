import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkMode from "./DarkMode";
import {  useSelector } from "react-redux";


const Header = ()=>{

    const[loginbtn,setloginbtn]=useState("Login");
    const onlineStatus = useOnlineStatus();
   

   const cartItems = useSelector((store)=>store.cart.items);
   console.log(cartItems)
    
   return (
    <div className = "header  flex items-center  justify-between px-5 bg-slate-300 shadow-xl border h-20 ">
      
      <div className="logo-container flex gap-6">
          <Link to="/"><img className="logo w-24 hover:scale-105 " src={LOGO_URL} alt="logo" ></img></Link>
          <span className="pt-4"> {onlineStatus ?"Online:✅" :"Offline:🔴"}</span>
      </div>
      
      <div className="nev-Item flex justify-between gap-16 hover:cursor-auto pl-6">
         
          <span className="bg-yellow-100"><DarkMode/></span>
          
           
           <span><Link to="/about">About</Link></span>
           
           <span><Link to="/cart">🛒 Cart-({cartItems.length}items)</Link></span>
          
     
          

          <button className="login-btn border bg-sky-400 p-1" 
              onClick={()=>{
              loginbtn ==="Login"
              ? setloginbtn("Logout")
              : setloginbtn("Login")
              }
            }> {loginbtn}
          </button>
         
        </div>

      </div>
    )
  }

  export default Header;