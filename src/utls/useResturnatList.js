import { useEffect, useState } from "react";

import { SWIGGY_URL } from "../utls/constants";

const useResturantList = () => {
  const [resListInfo, setResListInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    const list = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

    if (list === undefined) {
      const second_list = await json?.data?.cards[2]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;
      setResListInfo(second_list);
    } else {
      setResListInfo(list);
    }
  };

  return resListInfo;
};

export default useResturantList;
