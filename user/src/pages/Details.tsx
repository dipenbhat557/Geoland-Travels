import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import TourOverview from "../components/TourOverview";
import WhatsIncluded from "../components/WhatsIncluded";
import Itinerary from "../components/Itinerary";
import LeaveReply from "../components/LeaveReply";
import { useEffect } from "react";
import { TourData } from "../store";

const Details = () => {
  const location = useLocation();
  const tour: TourData = location?.state?.tour;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Navbar isHome={false} />
      <div className={`flex gap-4 items-center mt-16 ${styles.paddingX} `}>
        <button
          className={`bg-green-200  ${styles.primaryTextColor} rounded-lg px-3 py-2 `}
        >
          Bestseller
        </button>
        <button
          className={`bg-green-200  ${styles.primaryTextColor} rounded-lg px-3 py-2 `}
        >
          Free Cancellation
        </button>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className={`${styles.sectionHeadText} ${styles.paddingX} w-[60%]`}>
          {tour?.tourTitle}
        </p>
        <div className="flex w-full justify-between">
          <div className="w-[30%] flex gap-8 items-center justify-center">
            <p className=" text-[12px]">{tour?.location}</p>
            <p className=" text-[12px]">50+ booked</p>
          </div>
        </div>
        <div
          className={`${styles.padding} w-full h-[500px] rounded-lg flex justify-between`}
        >
          <div className="w-[59.5%] h-full rounded-l-lg">
            <img
              src={tour?.img?.[0]}
              alt="img"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-[40%] h-full rounded-r-lg">
            <div className="w-full h-[49.5%] rounded-tr-lg">
              <img
                src={tour?.img?.[1]}
                alt="img"
                className="w-full h-full object-cover rounded-tr-lg"
              />
            </div>
            <div className="w-full relative h-[49%] rounded-br-lg">
              <img
                src={tour?.img?.[2]}
                alt="img"
                className="w-full h-full object-cover rounded-br-lg"
              />
              <p className="absolute rounded-lg bg-[#05073C] text-white cursor-pointer text-[12px] px-3 py-2 bottom-5 right-5">
                See all photos
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.padding} h-auto items-center flex gap-14`}>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex flex-col gap-1">
              <p>Duration</p>
              <p className="text-[12px] font-light">{tour?.duration}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex flex-col gap-1">
              <p>Group Size</p>
              <p className="text-[12px] font-light">{tour?.groupSize}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex flex-col gap-1">
              <p>Ages</p>
              <p className="text-[12px] font-light">{tour?.ages}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
            <div className="flex flex-col gap-1">
              <p>Languages</p>
              <p className="text-[12px] font-light">{tour?.languages}</p>
            </div>
          </div>
        </div>
        <TourOverview tour={tour} />
        <WhatsIncluded tour={tour} />
        <Itinerary />
        {/* <DetailReviews tour={tour} /> */}
        <LeaveReply />
      </div>
    </div>
  );
};
export default Details;
