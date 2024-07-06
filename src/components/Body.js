import ResturantCard from "./ResturantCard";

import resturantList from "../utls/mockData";

import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resturantList);

  return (
    <div className="body">
      <div className="search">
        <input />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard resObj={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
