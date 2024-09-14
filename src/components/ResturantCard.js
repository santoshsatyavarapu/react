import { CDN_URL } from "../utls/constants";

const ResturantCard = (props) => {
  const { resObj } = props;
  const { cuisines, cloudinaryImageId, name, avgRating, costForTwo, sla, id } =
    resObj?.info;
  const { deliveryTime } = sla;

  return (
    <div
      className="m-4 p-4 w-[273] h-[350] rounded-lg bg-gray-100 hover:bg-black-200 flex  flex-col"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="flex items-center justify-center ">
        <img
          className="rounded-lg w-[230] h-[150] "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="flex flex-col items-start flex-wrap">
        <h3 className="font-bold py-4 mb-0 pb-0 pl-1 text-sm ">{name}</h3>
        <h4 className="font-serif p-1 mb-2 mt-0  text-xs">
          {cuisines.join(", ")}
        </h4>
        <h4 className="font-serif p-1 text-sm">{avgRating} stars</h4>
        <h4 className="font-sans p-1 text-sm">{costForTwo}</h4>
        <h4 className="font-serif p-1 text-sm">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
