import { styles } from "../styles";

interface prop {
  img: string;
  location: string;
  title: string;
  rating: number;
  noOfResponse: number;
  description: string;
  note: string;
  time: string;
  old_price: number;
  price: number;
}

const TravelDate = (prop: prop) => {
  return (
    <div className="border rounded-md w-full  flex mb-8">
      <div className="relative h-[232px] w-[245px] rounded-lg">
        <img className="w-full h-full object-cover rounded-lg" src={prop.img} />
        <div className="w-[35px] h-[35px] bg-white rounded-full absolute top-5 right-5" />
      </div>

      <div className="flex flex-col justify-evenly items-center w-[45%] p-3 ">
        <span className="text-xs  w-full text-left opacity-50">
          {prop.location}
        </span>
        <h6 className=" line-clamp-2 mt-3 tracking-tight font-semibold  font-sans">
          {prop.title}
        </h6>
        <div className="flex justify-center p-1">
          <span className="text-center opacity-70 text-xm">
            {prop.rating} ({prop.noOfResponse})
          </span>
        </div>
        <p className="w-full text-left opacity-70">{prop.description}</p>

        <span className="text-[#EB662B] text-xs text-left w-[90%]">
          {prop.note}
        </span>
      </div>

      <div className="h-25 w-0.5 opacity-30  bg-slate-400"></div>

      <div
        className={`flex flex-col justify-between items-center ${styles.padding} `}
      >
        <p className=" opacity-60 text-center">{prop.time}</p>

        <div className="flex flex-col text-center gap-2">
          <span className=" line-through opacity-40 ">{prop.old_price}</span>
          <span className="">From {prop.price}</span>
          <button className=" border border-[#06905E] rounded-md m-1 ml-5 px-4 py-2 mb-3">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDate;
