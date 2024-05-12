import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TravelDate from "../components/TravelDate";
import { tour_types } from "../constants";
import { styles } from "../styles";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TourData, toursData } from "../store";
import { def } from "../assets";

const Destinations = () => {
  const location = useLocation();
  const tours: TourData[] = useRecoilValue(toursData);
  const key = location?.state?.key;
  const value = location?.state?.val;
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentTours, setCurrentTours] = useState<TourData[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let res: TourData[] = [];
    if (key === "type") {
      res = tours?.filter((t: TourData) => t?.type === value);
    } else if (key === "category") {
      res = tours?.filter((t: TourData) => t?.category.includes(value));
    } else {
      res = tours;
    }
    setCurrentTours(res);
  }, []);

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

  useEffect(() => {
    const updatedTours = tours.filter((tour) =>
      selectedTypes.every((type) => tour.category.includes(type))
    );
    setCurrentTours(updatedTours);
  }, [selectedTypes]);

  return (
    <div className="flex flex-col">
      <Navbar isHome={false} />

      <div className={` ${styles.padding} ${styles.sectionHeadText} mt-14`}>
        Explore all things to do in {value}
      </div>

      <div className="flex pl-4">
        <div className=" w-[20%] h-[25%] border   rounded-t-lg mt-[8%]">
          <div className={`${styles.padding} w-full h-[80%] flex flex-col`}>
            <h6 className="py-5">Tour Type</h6>
            <ul>
              {tour_types.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center mb-4">
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
                      className="ms-2 text-sm font-medium "
                    >
                      {item?.title}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[70%] pl-8 pt-6 flex flex-col gap-3">
          <div className="w-full flex items-center text-[10px] text-slate-700 h-[50px] justify-between">
            <p>{currentTours?.length} results</p>
            <p>Sort by: Featured</p>
          </div>
          {currentTours.map((item, index) => (
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
  );
};
export default Destinations;
