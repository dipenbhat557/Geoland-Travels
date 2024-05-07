import { styles } from "../styles";

export interface Tour {
  img: string;
  title: string;
  rating: number;
  noOfResponse: number;
  isBestSeller: boolean;
  isFreeCancellation: boolean;
  location: string;
  noOfBookings: string;
  duration: string;
  groupSize: string;
  ages: string;
  languages: string;
  cost: string;
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: string[];
  review: {
    location: number;
    price: number;
    food: number;
    security: number;
    rooms: number;
    tourOperator: number;
  };
}

const TourOverview = ({ tour }: { tour: Tour }) => {
  const calculateEndDate = () => {
    const duration = parseInt(tour.duration.slice(0, 1));

    const endDate = new Date(Date.now() + duration);

    return endDate.toDateString();
  };
  return (
    <div className={` ${styles.padding} w-full h-auto flex justify-between `}>
      <div className="flex flex-col gap-3 w-[60%] h-auto border-b border-slate-200">
        <p className={`${styles.sectionHeadText}`}>Tour Overview</p>
        <p className="text-[14px] font-light text-justify leading-loose">
          {tour?.overview}
        </p>
        <p className={`${styles.sectionSubText}`}>Tour Highlights</p>
        <ul className="list-disc flex flex-col gap-3">
          {tour?.highlights?.map((tour, i) => {
            return (
              <li className="text-[13px] font-light" key={i}>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`w-[30%] h-[350px] shadow-md shadow-slate-500 rounded-lg ${styles.padding} flex flex-col justify-between`}
      >
        <div className="flex">
          <p className="text-[13px] font-light">From </p>&nbsp;
          <p className="font-medium ">{tour?.cost}</p>
        </div>
        <div className="border h-[45%] flex flex-col justify-around p-2 border-slate-500 rounded-lg">
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex  flex-col gap-1">
              <p>From</p>
              <p className="text-[12px] font-light">{calculateEndDate()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-slate-200">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex flex-col gap-1">
              <p>Time</p>
              <p className="text-[12px] font-light">Choose Time</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>{tour?.cost}</p>
        </div>
        <button
          className={`w-full py-2 rounded-lg text-white text-[12px] ${styles.primaryBgColor}`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
export default TourOverview;
