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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
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
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredResturant(listOfResturant);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
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
