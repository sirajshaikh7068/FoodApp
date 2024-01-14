import RestronCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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

  const onlineStatus=useOnlineStatus();

  if (onlineStatus=== false){return (<h1>Plz cheak Internet connection</h1>)}

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
      <div className="body bg-cyan-400 ">
        <div className="filter flex flex-wrap p-5 justify-center gap-2">
          
            <input 
              type="text"
              placeholder="Enter Restaurent or food"
              className="search-box w-96 h-8 rounded-xl p-2 font-medium font-style: italic"
              value={searchtext}
              onChange={(e)=>{ setsearchtext(e.target.value);console.log(filterlist);filter1();}}
              />


              <button className="search-btn bg-blue-500 px-2 rounded-lg"
                onClick={() =>{setsearchtext(""); filter1()}}
            >All</button>
            
         

        <button className="res-btn bg-green-400 rounded-lg px-2" onClick={()=>{
            const filterres=list.filter(
            (res)=>res.info.avgRating>4.4
          );
          setfilterList(filterres);          
        }}
        >⭐Top Rated</button>
       
       </div> 
        <div className="res-container flex flex-wrap justify-center gap-9 py-16" >
          {filterlist.map((restaurant) =>( <Link className="a" key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id}><RestronCard  resData={restaurant} /></Link> ))}
       
        </div>
       
      </div>
    )
  }

  export default Body;