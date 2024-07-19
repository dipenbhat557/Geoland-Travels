import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import TourOverview from "../components/TourOverview";
import WhatsIncluded from "../components/WhatsIncluded";
import Itinerary from "../components/Itinerary";
import LeaveReply from "../components/LeaveReply";
import { Suspense, useEffect, useState } from "react";
import { TourData } from "../store";
import { SectionWrapper } from "../hoc";
import Footer from "../components/Footer";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Loading from "../components/Loading";
// import DetailReviews from "../components/DetailReviews";

const Details = () => {
  const location = useLocation();
  const tour: TourData = location?.state?.tour;
  const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (tour == null || tour == undefined) {
      window.location.href = "/";
    }
    window.scrollTo(0, 0);
  }, [tour, navigate]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-3">
        <Navbar isHome={false} />
        <div className={`flex gap-4 items-center sm:mt-16 ${styles.paddingX} `}>
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
            <div className="w-[50%] sm:w-[30%] px-3 flex gap-8 items-center justify-center">
              <p className=" text-[12px]">{tour?.location}</p>
              <p className=" text-[12px]">50+ booked</p>
            </div>
          </div>
          <div
            className={`${styles.padding} relative w-full h-[400px] sm:h-[600px] rounded-lg `}
          >
            <div className="w-full  h-full rounded-lg flex justify-between">
              <div className="w-[50.5%] h-full rounded-l-lg">
                <img
                  src={tour?.img?.[0]}
                  alt="img"
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="flex flex-col justify-between w-[49%] h-full rounded-r-lg">
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
                  <p
                    onClick={() => setClicked(true)}
                    className="absolute rounded-lg bg-[#05073C] text-white cursor-pointer text-[12px] px-3 py-2 bottom-5 right-5"
                  >
                    See all photos
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`w-[90%] sm:w-[95%]  mx-auto h-full ${
                clicked ? "absolute top-4" : "hidden"
              } z-20`}
            >
              <img
                src={tour?.img?.[currentIndex]}
                alt="img"
                className="w-full h-full z-30 absolute object-contain"
              />
              <IoMdClose
                onClick={() => setClicked(false)}
                className="text-[50px] sm:text-[65px] cursor-pointer text-red-500 absolute top-[10%] z-40 right-[5%]"
              />
              <MdKeyboardArrowRight
                onClick={() => {
                  console.log(currentIndex);
                  setCurrentIndex(
                    Math.min(tour?.img?.length - 1, currentIndex + 1)
                  );
                }}
                className="text-[65px] cursor-pointer text-white absolute top-[48%] z-40 right-[5%]"
              />
              <div className="w-full h-full bg-black opacity-80 absolute z-10 top-0 right-0" />
              <MdKeyboardArrowLeft
                onClick={() => {
                  console.log(currentIndex);
                  setCurrentIndex(Math.max(0, currentIndex - 1));
                }}
                className="text-[65px] cursor-pointer text-white absolute top-[48%] z-40 left-[5%]"
              />
            </div>
          </div>
          <div
            className={`${styles.padding} h-auto items-start sm:items-center flex flex-col sm:flex-row gap-3  sm:gap-14`}
          >
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
            <div className=" flex gap-2">
              <div className="w-[40px] h-[40px] border border-slate-200 rounded-lg" />
              <div className="flex flex-col gap-1">
                <p>Languages</p>
                <p className="text-[12px] font-light">{tour?.languages}</p>
              </div>
            </div>
          </div>
          <TourOverview tour={tour} />
          <WhatsIncluded tour={tour} />
          <Itinerary tour={tour} />
          {/* <DetailReviews tour={tour} /> */}
          {/* <DetailReviews /> */}
          <LeaveReply />
          <Footer isContact={false} />
        </div>
      </div>
    </Suspense>
  );
};
export default SectionWrapper(Details);
