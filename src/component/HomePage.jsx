import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

function HomePage() {
  return (
    <div className="grid grid-flow-col grid-cols-[_1.5fr,_1fr] ">
      
      <div className=" border-2 mx-auto text-left max-w-[50%] my-auto h-screen">
      <div className="pt-[1.4em] px-5 pb-[20vh]">
      <NavBar/>
      </div>
        <div className="p-5 flex flex-col gap-5  ">
          <h1 className="text-5xl font-bold mb-2">
            Explore the best camps on Earth.
          </h1>
          <p>
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </p>
          <ul className="flex-col">
            <li className="flex  items-center gap-2 pb-2 ">
              <img src="src\assets\designCamp\Assets\Checkmark.svg" />
              <p className="">Add your own camp suggestions.</p>
            </li>
            <li className="flex items-center gap-2 pb-2">
              <img src="src\assets\designCamp\Assets\Checkmark.svg" />
              <h3>Leave reviews and experiences.</h3>
            </li>
            <li className="flex items-center gap-2 pb-4">
              <img src="src\assets\designCamp\Assets\Checkmark.svg" />
              <h3>See locations for all camps.</h3>
            </li>
            <Link to={"/SearchPage"}>
              {" "}
              <button className="p-3 px-4 bg-black text-white rounded hover:translate-y-[3px] hover:shadow-2xl hover: ease-in duration-200">
                View Campgrounds
              </button>
            </Link>
          </ul>
          <p className="text-sm ">Partnered with:</p>
          <div className="flex max-w-[100%]">
            <div>
              <img className="" src="src\assets\designCamp\Assets\Airbnb.svg" />
            </div>
            <div>
              <img
                className=""
                src="src\assets\designCamp\Assets\Booking.svg"
              />
            </div>
            <div>
              <img
                className=""
                src="src\assets\designCamp\Assets\Plum Guide.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-screen w-screen"
        alt=""
        src="src/assets/designCamp/Assets/Hero Image.jpg"
      />
    </div>
  );
}

export default HomePage;
