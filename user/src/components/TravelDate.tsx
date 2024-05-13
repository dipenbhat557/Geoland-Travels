import { useNavigate } from "react-router-dom";
import { TourData } from "../store";
import { styles } from "../styles";

interface prop {
  img: string;
  location: string;
  title: string;
  description: string;
  duration: string;
  old_price: number;
  price: number;
  item: TourData;
}

const TravelDate = (prop: prop) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded-md w-[90%] h-auto sm:h-[300px] sm:w-full  flex mb-8">
      <div className="w-[70%] h-auto sm:h-full flex flex-col sm:flex-row justify-between items-center">
        <div className="relative h-[200px] sm:h-full w-full sm:w-[50%] rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={prop.img}
          />
          <div className="w-[35px] h-[35px] bg-white rounded-full absolute top-5 right-5" />
        </div>

        <div className="flex flex-col justify-evenly gap-3 items-center w-full sm:w-[45%] p-3 ">
          <span className="text-xs  w-full text-left opacity-50">
            {prop.location}
          </span>
          <h6 className=" line-clamp-2  tracking-tight font-semibold  font-sans">
            {prop.title}
          </h6>

          <p className="w-full text-left opacity-70 line-clamp-6">
            {prop.description}
          </p>

          <span className="text-[#EB662B] text-xs text-left w-[90%]">
            Best Price Guaranteed
          </span>
        </div>
      </div>

      <div className="h-25 w-0.5 opacity-30  bg-slate-400"></div>

      <div
        className={`flex flex-col justify-center gap-7 sm:gap-0 sm:justify-between items-center ${styles.padding} `}
      >
        <p className=" opacity-60 text-center">{prop.duration}</p>

        <div className="flex flex-col text-center gap-5 sm:gap-2">
          <span className=" line-through opacity-40 ">{prop.old_price}</span>
          <span className="">From NPR {prop.price}</span>
          <button
            onClick={() =>
              navigate("/details", { state: { tour: prop?.item } })
            }
            className=" border border-[#06905E] rounded-md m-1 ml-5 px-4 py-2 mb-3"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDate;
