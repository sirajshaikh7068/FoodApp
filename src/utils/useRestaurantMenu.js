import { useState, useEffect } from "react";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4659813&lng=73.8246309&restaurantId=" +
        resID
    );
    const json = await data.json();
    // console.log(json);
    setResinfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
