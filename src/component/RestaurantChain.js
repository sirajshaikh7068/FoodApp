import { FOOD_LOGO } from "../utils/constants";
import { STAR_URL } from "../utils/constants";

const RestaurantChain = (props) => {
  const { resChain } = props;
  //  console.log(resData);

  const {
    name,
    locality,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resChain?.info;
  return (
    <div className="res-card w-52 h-72 p-5  hover:scale-105 bg-slate-100 shadow-2xl dark:bg-slate-200 dark:shadow-2xl ">
      <img
        className="res-logo h-32 w-44 rounded-lg   "
        src={FOOD_LOGO + cloudinaryImageId}
      ></img>
      <h3 className="font-bold ">{name.slice(0, 19)}</h3>
      <div className="flex gap-1 ">
        <h5 className="flex font-semibold">
          <img className="w-5 h-5" src={STAR_URL}></img>
          {avgRating}
        </h5>
        |<h5 className="flex font-semibold">{sla.deliveryTime}min</h5>
      </div>
      <h5 className="flex font-semibold">{locality}</h5>
      <h5>{cuisines.slice(0, 2).join(",")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantChain;
