import { useParams } from "react-router-dom";
import useResturantMenu from "../utls/useResturantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  const menuList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;

  if (menuList == null) {
    return <Shimmer />;
  }
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
