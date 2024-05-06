import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { styles } from "../styles";

const Details = () => {
  const location = useLocation();
  const tour = location?.state?.tour;
  return (
    <div className="flex flex-col gap-3">
      <Navbar isHome={false} />
      <div className={`flex gap-4 items-center mt-16 ${styles.paddingX} `}>
        <button
          className={`${
            tour?.isBestSeller
              ? `bg-green-200  ${styles.primaryTextColor}`
              : "bg-slate-200"
          } rounded-lg px-3 py-2 `}
        >
          Bestseller
        </button>
        <button
          className={`${
            tour?.isFreeCancellation
              ? `bg-green-200  ${styles.primaryTextColor}`
              : "bg-slate-200"
          } px-3 py-2  rounded-lg`}
        >
          Free Cancellation
        </button>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className={`${styles.sectionHeadText} ${styles.paddingX} w-[60%]`}>
          {tour?.title}
        </p>
        <div className="flex w-full justify-between">
          <div className="w-[50%] flex gap-8 justify-center">
            <p className="font-light text-[12px]">
              {tour?.rating}&nbsp;({tour?.noOfResponse})
            </p>
            <p className="font-light text-[12px]">{tour?.location}</p>
            <p className="font-light text-[12px]">
              {tour?.noOfBookings}+booked
            </p>
          </div>
          <div className="w-[10%] flex gap-8">
            <p className="font-light text-[12px]">Share</p>
            <p className="font-light text-[12px]">Wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
