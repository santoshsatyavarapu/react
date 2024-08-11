import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { MENU_URL } from "../utls/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menuList, setMenuList] = useState([]);
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const resInfo = await data.json();

    setResInfo(resInfo);

    const menuList =
      resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card.itemCards;
    setMenuList(menuList);
  };

  return (
    <div>
      <h1>Menu</h1>
      {menuList.map((menuItem) => {
        const { id, name, price } = menuItem.card.info;

        return (
          <ul key={id}>
            <li>{name + " - Rs." + price / 100}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
