import React from "react";

const Filter = (props) => {
  const { setfilterList, list } = props;
  // console.log(list);

  return (
    <div className=" px-24 pt-4  gap-8 justify-center ">
      <button
        className="res-btn  bg-blue-500 font-bold  text-black w-fit px-2 pt-2 rounded-lg"
        onClick={() => {
          const fast_delivaryTime = list.filter(
            (res) => res.info.sla.deliveryTime < 30
          );

          setfilterList(fast_delivaryTime);
        }}
      >
        Fast Delivary
      </button>

      <button
        className="res-btn  bg-blue-500 ml-2 font-bold text-black w-fit px-2 pt-2 rounded-lg"
        onClick={() => {
          const filterres = list.filter((res) => res.info.avgRating > 4);
          setfilterList(filterres);
        }}
      >
        ⭐Top Rated
      </button>
    </div>
  );
};

export default Filter;
