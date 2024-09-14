import { useEffect, useState } from "react";

import ResturantCard from "./ResturantCard";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utls/useOnlineStatus";

import useResturantList from "../utls/useResturnatList";

const Body = () => {
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const listOfResturant = useResturantList();

  useEffect(() => {
    if (listOfResturant.length !== 0) {
      setFilteredResturant(listOfResturant);
    }
  }, [listOfResturant]);

  const networkstatus = useOnlineStatus();

  if (networkstatus === false) {
    return <h1>You are Offline</h1>;
  }

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className=" flex items-center m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-gray-500 rounded-sm py-1 h-8"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-orange-400 mx-4 rounded-sm  text-center text-white"
            onClick={() => {
              const searchFilteredList = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(searchFilteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 bg-orange-400 mx-4 rounded-sm  text-center text-white"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredResturant(filteredList);
          }}
        >
          Top Rated
        </button>

        <button
          className="px-4 py-1 bg-orange-400 mx-4 rounded-sm  text-center text-white"
          onClick={() => {
            setFilteredResturant(listOfResturant);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className=" flex items-center flex-wrap justify-center">
        {filteredResturant.map((resturant) => (
          <Link to={"restaurants/" + resturant.info.id} key={resturant.info.id}>
            <ResturantCard resObj={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
