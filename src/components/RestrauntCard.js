import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
}) => {
    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-50">
            <img
            src={ IMG_CDN_URL+cloudinaryImageId }
            />
            <h2 className="font-bold text-xl">{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{lastMileTravelString} minutes</h2>            
        </div>
    );
};

export default RestrauntCard;