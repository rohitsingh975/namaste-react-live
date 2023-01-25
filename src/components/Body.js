import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState,useEffect } from "react";
//import { ShimmerButton } from "react-shimmer-effects";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchInput,allRestaraunts) {
    const filterData = allRestaraunts.filter((restaraunt) => restaraunt?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    return filterData
}
const Body = () => {
    const [allRestaraunts,setAllRestaraunts] = useState([]);
    const [filterdRestaraunts,setFilterdRestaurants] = useState([]);
    const [searchInput,setSearchInput] = useState("");

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setAllRestaraunts(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if(!isOnline) {
        return <h1>Offline, please check your internet connection!!</h1>;
    }

    if(!allRestaraunts) return null;

    return allRestaraunts.length === 0 ? (<Shimmer />)
    : (
        <>
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="search"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
        </div>
        <button className="search-btn"
        onClick={() => {
            const data = filterData(searchInput,allRestaraunts);
            setFilterdRestaurants(data);
        }}>Search</button>
        <div className="restaurant-list">
            {
                filterdRestaraunts.map((restaraunt) => {
                    return <Link to={"/restraunt/"+restaraunt.data.id} key={restaraunt.data.id} ><RestrauntCard {...restaraunt.data} /></Link>;
                })
            }
        </div>
        </>
    );
};

export default Body;