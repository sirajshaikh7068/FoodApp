import React from "react";

import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// import { FOOD_LOGO } from '../utils/constants'

const ItemCategory = (items) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.items.map((item) => (
        <div
          key={items?.card?.info?.id}
          className=" border-b-2   border-gray-400 "
        >
          <div className="flex justify-between ">
            <div className="text-left w-8/12 p-4 ">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <br />
              <span className="font-semibold">
                {" "}
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>

              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>

            <div>
              <img
                className=" h-24 py-2 px-4 w-32 pr-5 shadow-2xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
              ></img>
              <button
                className="bg-white text-green-500 mb-6 relative bottom-6  px-4 py-2 hover:scale-95"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
