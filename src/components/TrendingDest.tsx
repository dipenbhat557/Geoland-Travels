import { trendingDest } from "../constants";
import { styles } from "../styles";

const TrendingDest = () => {
  return (
    <div
      className={`${styles.padding} w-full h-[500px] justify-between flex flex-col `}
    >
      <p className={`${styles.sectionHeadText} h-[10%]`}>Top Trending</p>
      <div className="w-full h-[88%] flex justify-between">
        <div className="h-full w-[25%] flex flex-col justify-between ">
          <div className="w-full h-[47%] rounded-lg relative">
            <img
              src={trendingDest?.[0]?.img}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[0]?.title}
            </p>
          </div>
          <div className="w-full relative h-[47%] rounded-lg">
            <img
              src={trendingDest?.[1]?.img}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[1]?.title}
            </p>
          </div>
        </div>
        <div className="h-full w-[40%] flex flex-col justify-between">
          <div className="rounded-lg relative w-full h-[47%]">
            <img
              src={trendingDest?.[2]?.img}
              alt="trending dest"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-5 left-5 text-white">
              {trendingDest?.[2]?.title}
            </p>
          </div>
          <div className="flex justify-between w-full h-[47%]">
            <div className="w-[47%] relative h-full rounded-lg">
              <img
                src={trendingDest?.[3]?.img}
                alt="trending dest"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-5 left-5 text-white">
                {trendingDest?.[3]?.title}
              </p>
            </div>
            <div className="w-[47%] relative h-full rounded-lg">
              <img
                src={trendingDest?.[4]?.img}
                alt="trending dest"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-5 left-5 text-white">
                {trendingDest?.[4]?.title}
              </p>
            </div>
          </div>
        </div>
        <div className="h-full relative w-[30%] rounded-lg">
          <img
            src={trendingDest?.[5]?.img}
            alt="trending dest"
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="absolute bottom-5 left-5 text-white">
            {trendingDest?.[5]?.title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrendingDest;
