import React from 'react'
import { useEffect,useState } from 'react';
import Shimmer from './component/Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from './utils/constants';
const RestaurantMenu = () => {

const[resInfo,setresInfo]=useState(null);

const{ resID }= useParams();
console.log(resID);
     
  useEffect(()=>{
    fetchData();
},[]);  

const fetchData= async () =>{
  const data= await fetch(MENU_API+ resID );
    
  const json= await  data.json();
//   console.log(json);
  setresInfo(json.data);
  
  
};

    if(resInfo ===null) return <Shimmer/>
   
      const {name,cuisines,avgRating,}=resInfo?.cards[0]?.card?.card?.info;
      // console.log(resInfo)
    
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    console.log(itemCards);
  return (
    <div>
 
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <ul>
          <li>
            {
              itemCards.map((items)=>
              <li  key={items.card.info.id}>
              {
                (items.card.info.name)}-₹
                {(items.card.info.price/100) ||(items.card.info.defaultprice/100) }</li>)
            }
          </li>
        </ul>
       
       
        
    </div>
  )
}

export default RestaurantMenu