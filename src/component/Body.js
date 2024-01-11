import RestronCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =() =>{

  const [list,setList]= useState([]);
 
  const [filterlist,setfilterList]= useState([]);
  const [searchtext,setsearchtext]=useState("");
  

  useEffect(()=>{
      fetchData();
  },[]);

  const fetchData= async () =>{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4659813&lng=73.8246309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  
    const json= await  data.json();
    

    {console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}
  
  setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  };



  if(list.length === 0){
    return <Shimmer/>;
  }
  


  
    return(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text"
              className="search-box"
              value={searchtext}
              onChange={(e)=>
                setsearchtext(e.target.value)}
              />

            <button className="search-btn"
                onClick={() => {
                const filterresto= list.filter((res) => 
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                );
                setfilterList(filterresto)
                // console.log(filterresto);
            }}

            >Search</button>



          </div>
        <button className="res-btn" onClick={()=>{
            const filterlist=list.filter(
            (res)=>res.info.avgRating>4
          );
          setList(filterlist);
        }}
        >⭐Top Rated</button>


        <div className="res-container">
          {filterlist.map((restaurant) =>( <RestronCard key={restaurant.info.id} resData={restaurant} /> ))}
       
        </div>
        </div> 
      </div>
    )
  }

  export default Body;