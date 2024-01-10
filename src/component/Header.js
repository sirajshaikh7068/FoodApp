import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    return (<div className = "header">
      <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo"></img>
      </div>
      
        <div className="nev-Item">
          <ul>
            <li>🔍Search</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒 Cart</li>
            </ul>
        </div>
      </div>
    )
  }

  export default Header;