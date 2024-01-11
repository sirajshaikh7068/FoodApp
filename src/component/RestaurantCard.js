import { FOOD_LOGO } from "../utils/constants";

const RestronCard =(props)=>{
    const {resData}= props;
   
   const {name,locality,cloudinaryImageId,cuisines,avgRating,costForTwo} = resData?.info;
   return (
       < div className="res-card" style={{backgroundColor:"rgb(210,205,205)"}}>
         <img className="res-logo"
          src={FOOD_LOGO+
         cloudinaryImageId}
         ></img>
         <h3>{name}</h3>
         <h5>{locality}</h5>
         <h5>{cuisines.slice(0,4).join(",")}</h5>
         <h5>{avgRating}⭐</h5>
         <h5>{costForTwo}</h5>
        
       </div>
   )
 };

 export default RestronCard;