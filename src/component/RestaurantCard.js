import { FOOD_LOGO } from "../utils/constants";
import { STAR_URL } from "../utils/constants";

const RestronCard =(props)=>{
    const {resData}= props;
   
   const {name,locality,cloudinaryImageId,cuisines,avgRating,costForTwo} = resData?.info;
   return (
       < div className="res-card">
         <img className="res-logo"
          src={FOOD_LOGO+
         cloudinaryImageId}
         ></img>
         <h3>{name}</h3>
         <h5>{locality}</h5>
         <h5>{cuisines.slice(0,3).join(",")}</h5>
         <h5 className="cc2"><img src={STAR_URL}></img> {avgRating}</h5>
         <h5>{costForTwo}</h5>
        
       </div>
   )
 };

 export default RestronCard;