import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{

    const[loginbtn,setloginbtn]=useState("Login");
    const onlineStatus = useOnlineStatus();
   
    return (<div className = "header">
      <div className="logo-container">
          <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" ></img></Link>
      </div>
      
        <div className="nev-Item">
          <ul>
            <li> Online Status:{onlineStatus ?"✅" :"🔴"}</li>
            <li>🔍Search</li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>🛒 Cart</li>
            <li><Link to="/grocery">Grocery</Link></li>
            <button className="login-btn" 
              onClick={()=>{
              loginbtn ==="Login"
              ? setloginbtn("Logout")
              : setloginbtn("Login")
            }
            }>
              {loginbtn}
            </button>
            </ul>
        </div>
      </div>
    )
  }

  export default Header;