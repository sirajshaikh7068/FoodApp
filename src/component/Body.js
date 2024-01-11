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

   // {console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}
  
  setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  };

  if(list.length === 0){
    return <Shimmer/>;
  }
 
  const filter1=() => {
    let filt=list.filter((res) => {return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
      //  console.log(res.info.name)

    });
    setfilterList(filt);

  };


    return(
      <div className="body">
        <div className="filter">
          
            <input 
              type="text"
              className="search-box"
              value={searchtext}
              onChange={(e)=>{ setsearchtext(e.target.value);console.log(filterlist);filter1();}}
              />


              <button className="search-btn"
                onClick={() =>{setsearchtext(""); filter1()}}
            >All</button>
            
         

        <button className="res-btn" onClick={()=>{
            const filterres=list.filter(
            (res)=>res.info.avgRating>4.4
          );
          setfilterList(filterres);          
        }}
        >⭐Top Rated</button>
       
       </div> 
        <div className="res-container">
          {filterlist.map((restaurant) =>( <RestronCard key={restaurant.info.id} resData={restaurant} /> ))}
       
        </div>
       
      </div>
    )
  }

  export default Body;