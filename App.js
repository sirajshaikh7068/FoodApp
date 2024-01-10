import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header";
import Body from "./src/component/Body";

const AppLayout = ()=>{
  return <div className="applayout">
      <Header/>
      <Body/>
     </div>
  
}
  
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
