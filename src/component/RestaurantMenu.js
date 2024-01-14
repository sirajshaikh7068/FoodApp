import React from 'react'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import { STAR_URL } from '../utils/constants';



const RestaurantMenu = () => {


// console.log(resInfo);

const{ resID }= useParams();

const resInfo = useRestaurantMenu(resID)

    if(resInfo ===null) return <Shimmer/>
   
      const {name,cuisines,avgRating,totalRatingsString,areaName,sla}=resInfo?.cards[0]?.card?.card?.info;
     
      
      console.log(resInfo?.cards[0]?.card?.card?.info)
    
     const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  return (
    <div className="parent-resMenu">
      <div className="first-resMenu">
        <diiv className="name-resmenu">
            <h2>{name}</h2>
          <h5>{cuisines.join(",")}</h5>
          <h5>{areaName}</h5>
        </diiv>
          <div className='rating-Menu'>
            <br/>
            <h5 className='cc'><img src={STAR_URL} ></img>{avgRating}</h5>
            <hr/>
            <h5>{totalRatingsString}</h5>
            
          </div>
      </div>
     
        
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
};

export default RestaurantMenu