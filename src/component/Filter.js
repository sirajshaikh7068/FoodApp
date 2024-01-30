import React from "react";

const Filter = (props) => {
  const { setfilterList, list } = props;
  // console.log(list);

  return (
    <div className=" px-44 pt-4 gap-8 justify-center ">
      <button
        className="res-btn border border-black mx-1 dark:bg-green-500  rounded-lg px-2 bg-black text-white"
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
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const filterres = list.filter((res) => res.info.avgRating > 4);
          setfilterList(filterres);
        }}
      >
        ⭐Top Rated
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const price = list.filter((res) => {
            res.info.priceForTwo = "400 for two";
          });
          setfilterList(price);
        }}
      >
        100-200
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const NearMe = list.filter((res) => {
            res.info.sla.lastMileTravel < 6;
          });
          setfilterList(NearMe);
        }}
      >
        NearMe
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const NearMe = list.filter((res) => {
            res.info.sla.lastMileTravel < 2;
          });
          setfilterList(NearMe);
        }}
      >
        Only-VEG
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const NearMe = list.filter((res) => {
            res.info.sla.lastMileTravel < 2;
          });
          setfilterList(NearMe);
        }}
      >
        Only-NONVEG
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6
          bg-black text-white"
        onClick={() => {
          const pizza = list.filter((res) => {
            res.info.cuisines = "pizza";
          });
          setfilterList(pizza);
        }}
      >
        PIZZA
      </button>
      <button
        className="res-btn border border-black rounded-lg px-2 mx-1 dark:bg-green-500 gap-6  bg-black text-white"
        onClick={() => {
          const NearMe = list.filter((res) => {
            res.info.sla.lastMileTravel < 2;
          });
          setfilterList(NearMe);
        }}
      >
        BURGER
      </button>
    </div>
  );
};

export default Filter;
