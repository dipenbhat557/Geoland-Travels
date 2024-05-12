import { useNavigate } from "react-router-dom";
// import { destItems } from "../constants";
import { styles } from "../styles";
import { TourData, toursData } from "../store";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { def } from "../assets";

const TrendingDest = () => {
  const navigate = useNavigate();

  const tours: TourData[] = useRecoilValue(toursData);
  const [trendingDest, setTrendingDest] = useState<TourData[]>([]);

  useEffect(() => {
    const packageResults = tours.filter((t: TourData) => t?.trending === true);
    setTrendingDest(packageResults);
  }, []);

  return (
    <div
      id="trending"
      className={`${styles.padding} w-full h-[500px] justify-between flex flex-col `}
    >
      <p className={`${styles.sectionHeadText} h-[10%]`}>
        Trending Destinations
      </p>
      <div className="w-full h-[88%] flex justify-between">
        <div className="h-full w-[25%] flex flex-col justify-between ">
          <div
            onClick={() =>
              navigate("/details", { state: { tour: trendingDest?.[0] } })
            }
            className=" cursor-pointer w-full h-[47%] rounded-lg relative"
          >
            <img
              src={trendingDest?.[0]?.img?.[0] || def}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[0]?.tourTitle}
            </p>
          </div>
          <div
            onClick={() =>
              navigate("/details", { state: { tour: trendingDest?.[1] } })
            }
            className=" cursor-pointer w-full relative h-[47%] rounded-lg"
          >
            <img
              src={trendingDest?.[1]?.img?.[0] || def}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[1]?.tourTitle}
            </p>
          </div>
        </div>
        <div className="h-full w-[40%] flex flex-col justify-between">
          <div
            onClick={() =>
              navigate("/details", { state: { tour: trendingDest?.[2] } })
            }
            className=" cursor-pointer rounded-lg relative w-full h-[47%]"
          >
            <img
              src={trendingDest?.[2]?.img?.[0] || def}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[2]?.tourTitle}
            </p>
          </div>
          <div className="flex justify-between w-full h-[47%]">
            <div
              onClick={() =>
                navigate("/details", { state: { tour: trendingDest?.[3] } })
              }
              className=" cursor-pointer w-[47%] relative h-full rounded-lg"
            >
              <img
                src={trendingDest?.[3]?.img?.[0] || def}
                alt="trending dest"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-5 left-5 text-white">
                {trendingDest?.[3]?.tourTitle}
              </p>
            </div>
            <div
              onClick={() =>
                navigate("/details", { state: { tour: trendingDest?.[4] } })
              }
              className="w-[47%] cursor-pointer relative h-full rounded-lg"
            >
              <img
                src={trendingDest?.[4]?.img?.[0] || def}
                alt="trending dest"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-5 left-5 text-white">
                {trendingDest?.[4]?.tourTitle}
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate("/details", { state: { tour: trendingDest?.[5] } })
          }
          className=" cursor-pointer h-full relative w-[30%] rounded-lg"
        >
          <img
            src={trendingDest?.[5]?.img?.[0] || def}
            alt="trending dest"
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="absolute bottom-5 left-5 text-white">
            {trendingDest?.[5]?.tourTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrendingDest;
