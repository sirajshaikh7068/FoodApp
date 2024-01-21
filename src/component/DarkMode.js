import React from 'react';
import { useState } from 'react';

const DarkMode = () => {
    const [theme,setTheme]=useState("🌙");


    const toggleTheme=()=>{
        document.documentElement.classList.toggle('dark');
       }
   
   
  
    return (
    <div className=''>
    <button className="p-1    "
    onClick={()=>{
           toggleTheme();
           theme==="🌙" ? setTheme("🔆"):setTheme("🌙")
        }}
 
    >{theme} 
    </button></div>
  )
}

export default DarkMode;