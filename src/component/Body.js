import RestronCard, { withIsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Crousel from "./Crousel";
import FilterSearch from "./FilterSearch";
import userestaurantlist from "../utils/userestaurantlist";
import Filter from "./Filter";
import RestaurantChain from "./RestaurantChain";

const Body = () => {
  const [list, setList, filterlist, crouselCards, setfilterList] =
    userestaurantlist();

  const [searchtext, setsearchtext] = useState("");

  const RestaurantCardeithLabel = withIsOpenLabel(RestronCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Plz cheak Internet connection</h1>;
  }

  if (list.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-16 dark:bg-slate-900 pt-16 pb-44 ">
      <h1 className="text-black font-bold text-xl py-4 px-16 dark:text-white">
        What's Your Plan Today ?
      </h1>
      <Crousel crouselCards={crouselCards} />
      <br />
      <hr />

      <RestaurantChain />
      <div className="">
        <FilterSearch
          searchtext={searchtext}
          setfilterList={setfilterList}
          setsearchtext={setsearchtext}
          list={list}
        />
      </div>
      <h1 className="text-black font-bold text-xl py-2 px-16 dark:text-white">
        Top restaurant chains in Pune
      </h1>
      <Filter setfilterList={setfilterList} list={list} />
      <br />
      <div className="res-container flex flex-wrap justify-center mt-6 gap-9 ">
        {filterlist.map((restaurant) => (
          <Link
            className="a"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardeithLabel resData={restaurant} />
            ) : (
              <RestronCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
