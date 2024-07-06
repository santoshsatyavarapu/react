import { CDN_URL } from "../utls/constants";

const ResturantCard = (props) => {
  const { resObj } = props;
  const { cuisines, cloudinaryImageId, name, avgRating, costForTwo, sla } =
    resObj?.info;
  const { deliveryTime } = sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
