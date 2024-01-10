import RestronCard from "./RestaurantCard";
import resList from "../utils/Mockdata";
import { useState } from "react";

const Body =() =>{

  const [List,setList]= useState(resList);



    return(
      <div className="body">
        <button className="res-btn" onClick={()=>{

            const filterlist=List.filter(
            (res)=>res.info.avgRating>4
          );
          setList(filterlist);
          
        }}
        >⭐Top Rated</button>
        
        <div className="res-container">
          {List.map(restaurant =>
             <RestronCard key={restaurant.info.id} resData={restaurant}/>)}
       
        </div>
      </div>
    )
  }

  export default Body;