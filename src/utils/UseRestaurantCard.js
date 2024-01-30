// import React from 'react'
// import { useState,useEffect } from 'react';

// const UseRestaurantCard = () => {

//     const [filterlist,setfilterList]= useState([]);
//     const [list,setList]= useState([]);

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData= async () =>{
//       const data= await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4659813&lng=73.8246309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//       const json= await  data.json();

//      // {console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}

//     setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//     };

//     return list,filterlist;
// }

// export default UseRestaurantCard;
