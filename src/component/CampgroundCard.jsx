import React from "react";
import { Link, Outlet } from "react-router-dom";
import CampsPage from "./CampsPage";

function CampgroundCard(props) {
  
  return (
    
      <div className="p-2 border-2 rounded-lg shadow-lg hover:translate-y-[2px] w-[30%]">
        <div>
          <img
            className="rounded w-[100%] hover:scale-110"
            src= {props.img}
          />
        </div>
        <div className="text-left py-2">
          <h1 className="font-bold ">{props.title}</h1>
          <p className="text-gray-500 text-sm mb-2 max-sm: w-[60%]">{props.description}</p>
          <div>
            <Link to={`${props.id}`}>
            <button className="w-full mt-2 border-2 p-2 font-bold rounded-lg hover:bg-black hover:text-white ">
              view Campground
            </button>
            </Link>
          </div>
        </div>
        <Outlet/>
      </div>
    
  );
}

export default CampgroundCard;
