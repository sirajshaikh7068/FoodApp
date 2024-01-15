import { FOOD_LOGO } from "../utils/constants";
import { STAR_URL } from "../utils/constants";

const RestronCard =(props)=>{
    const {resData}= props;
   
   const {name,locality,cloudinaryImageId,cuisines,avgRating,sla} = resData?.info;
   return (
       < div className="res-card w-52 h-72 p-5 rounded-lg hover:scale-105 bg-slate-400 shadow-2xl dark:bg-slate-200 dark:shadow-2xl " >
         <img className="res-logo h-32 w-44 rounded-lg   "
          src={FOOD_LOGO+
         cloudinaryImageId}
         ></img>
         <h3 className="font-bold ">{name.slice(0,19)}</h3>
         <div className="flex gap-1 ">
         <h5 className="flex font-semibold" ><img className="w-5 h-5" src={STAR_URL}></img>{avgRating}</h5>|
         <h5 className="flex font-semibold">{sla.deliveryTime}min</h5>
         </div>
         <h5 className="flex font-semibold">{locality}</h5>
         <h5>{cuisines.slice(0,2).join(",")}</h5>
        
        
        
       </div>
   )
 };


 export const withIsOpenLabel=()=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-white text-black mt-2   pl-2 pr-2 dark:bg-black  dark:text-white">Open</label>
          <RestronCard {...props}/>
        </div>
      )
    }

 }


 export default RestronCard;