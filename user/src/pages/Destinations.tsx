import { Suspense, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TravelDate from "../components/TravelDate";
import { tour_types } from "../constants";
import { styles } from "../styles";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TourData, toursData } from "../store";
import { def } from "../assets";
import Loading from "../components/Loading";

const Destinations = () => {
  const location = useLocation();
  const tours: TourData[] = useRecoilValue(toursData);
  const key = location?.state?.key;
  const value = location?.state?.val;
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentTours, setCurrentTours] = useState<TourData[]>([]);

  useEffect(() => {
    console.log("key is ", key, " value is ", value);
    window.scrollTo(0, 0);
    filterTours();
  }, [key, value, tours]);

  useEffect(() => {
    filterTours();
  }, [selectedTypes]);

  const filterTours = () => {
    let res: TourData[] = tours;
    if (key?.trim() === "type") {
      res = res.filter((t: TourData) => t?.type === value);
    } else if (key?.trim() === "category") {
      res = res.filter((t: TourData) => t?.category.includes(value));
    }
    if (selectedTypes.length > 0) {
      res = res.filter((tour) =>
        selectedTypes.every((type) => tour.category.includes(type))
      );
    }
    setCurrentTours(res);
    console.log("response is ", res);
  };

  const handleSortType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedType = e.target.value;
    if (e.target.checked) {
      setSelectedTypes((prevTypes) => [...prevTypes, checkedType]);
    } else {
      setSelectedTypes((prevTypes) =>
        prevTypes.filter((type) => type !== checkedType)
      );
    }
  };
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <Navbar isHome={false} />

        <div
          className={` ${styles.padding} ${styles.sectionHeadText} sm:mt-14`}
        >
          Explore all things to do in {value ? value : "all tours"}
        </div>

        <div className="flex flex-col sm:flex-row sm:pl-4">
          <div className="w-full sm:w-[20%] h-auto sm:h-[25%] border   rounded-t-lg mt-[8%]">
            <div className={`${styles.padding} w-full h-[80%] flex flex-col`}>
              <h6 className="py-5">Tour Type</h6>
              <ul className="flex gap-2 sm:flex-col">
                {tour_types.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-2 sm:mb-4">
                      <input
                        key={index}
                        id={`checkbox-${index}`}
                        type="checkbox"
                        value={item?.content}
                        onChange={handleSortType}
                        checked={selectedTypes.includes(item?.content)}
                        className="w-4 h-4 bg-gray-100  rounded-lg   focus:outline-none"
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="text-[9px] sm:text-[16px]  font-medium "
                      >
                        {item?.title}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[95%] sm:w-[70%] sm:pl-8 sm:pt-6 items-center flex flex-col gap-3">
            <div className="w-[80%] sm:w-full flex items-center text-[10px] text-slate-700 h-[50px] justify-between">
              <p>{currentTours?.length} results</p>
              <p>Sort by: Featured</p>
            </div>
            {currentTours?.map((item, index) => (
              <TravelDate
                key={index}
                img={item.img?.[0] || def}
                location={item.location}
                title={item.tourTitle}
                description={item.overview}
                duration={item.duration}
                old_price={item.price + 999}
                price={item.price}
                item={item}
              />
            ))}
          </div>
        </div>
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default Destinations;
