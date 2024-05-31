import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { STAR_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setshowIndex] = useState(null);

  const { resID } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, totalRatingsString, areaName, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  //  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="parent-resMenu dark:bg-slate-900 shadow-2xl bg-slate-200 dark:shadow-2xl  ">
      <div className="first-resMenu bg-gray-200 shadow-2xl w-8/12 mx-auto flex flex-wrap justify-center gap-96 pt-5  border dark: bg-gray-150 mb-10  ">
        <diiv className="name-resmenu ">
          <h2 className="font-bold text-xl text-center">{name}</h2>

          <h6 className="text-sm font-semibold">{cuisines.join(",")}</h6>
          <h6 className="text-sm font-semibold">{areaName}</h6>
        </diiv>
        <div className="rating-Menu font-semibold">
          <br />
          <h5 className="cc flex gap-2 ">
            <img className="w-5 h-5" src={STAR_URL}></img>
            {avgRating}
          </h5>
          <hr />
          <h5 font-semibold>{totalRatingsString}</h5>
        </div>
      </div>
      <div>
        <p className="text-center">
          {categories.map((category, index) => (
            // Controlled Component
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setshowIndex={() =>
                setshowIndex(index === showIndex ? null : index)
              }
              dummy={dummy}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
