import { NavBar } from "./NavBar";
import Reviews from "./reviews";
import data from "../component/CampData";
import { useParams } from "react-router-dom";

const CampsPage = () => {
    const data1 = data
    const num = useParams()
    
    
  return (
    <div className="px-14 py-4 max-h-100vh" >
      <div className=" h-20 flex items-center">
        <div className="mr-[3em] p-4">
          <NavBar />
        </div>

        <h1>Home</h1>
        <div className="flex ml-auto items-center m-6 ">
          <h1 className="m-4 hover:translate-y-[2px]">Login</h1>
          <button className=" bg-black text-white font-serif p-4 rounded-md text-sm hover:animate-pulse">
            Create an account
          </button>
        </div>
      </div>

      {/* ____________________content--------- */}
      <div className="grid grid-col grid-cols-[1fr,1.7fr] gap-4 my-6">
        <div className="border-4 h-fit w-fit p-9">
          <img src="https://res.cloudinary.com/dhlv2hnt4/image/upload/v1695818171/Map_lsr2ke.png" />
        </div>
        <div className="">
          <div className="border  p-7">
            <img
              className=" w-[80vw] h-[37vh] m-auto rounded-md"
              src={data1[num.id].campImg}
            />
            <div className="font-bold text-xl py-4 flex justify-between">
              <h1>{data1[num.id].title}</h1>{" "}
              <label className="font-semibold">$104.99/night</label>
            </div>
            <div className="text-left text-gray-500">
              {" "}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum temporibus eum odit reiciendis molestiae animi dicta
                culpa impedit, tempora vero. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Culpa, laboriosam!
              </p>
              <p className="py-2 italic">submitted by andrew mike</p>
            </div>
          </div>
          <div className=" p-7 mt-6 border">
            <div>
              <Reviews />
            </div>
            <button className="bg-black px-6 py-4 text-white rounded-md flex ml-auto gap-3 font-semibold ">
              <img src="https://res.cloudinary.com/dhlv2hnt4/image/upload/v1695818727/Chat_Bubble_xdiows.svg" />
              Leave a Review
            </button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <NavBar />
      </div>
    </div>
  );
};

export default CampsPage;
