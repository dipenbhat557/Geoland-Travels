import { trendingItems } from "../constants";
import { styles } from "../styles";

const Trending = () => {
  return (
    <div className={`flex w-full ${styles.padding} h-[550px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%]`}>Top Trending</p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {trendingItems?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[23%] border border-slate-200 h-[90%] p-2 rounded-3xl flex flex-col"
            >
              <div className="w-full h-[60%] rounded-3xl relative">
                <img
                  src={item?.img}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="bg-white h-[40px] w-[40px] rounded-full absolute z-10 -bottom-6 right-5" />
              </div>
              <p className="h-[8%] text-slate-400 flex items-center font-light text-[13px] ml-3">
                {item?.location}
              </p>
              <p className="h-[15%]  font-semibold flex items-center line-clamp-2">
                {item?.title}
              </p>
              <div className="h-[8%] text-[14px] justify-center text-slate-600 flex gap-3  items-center">
                <p>{item?.rating}</p>
                <p>{`(${item?.noOfResponse})`}</p>
              </div>
              <div className="w-[90%] text-[14px] h-[8%] px-4 border-t border-slate-100 flex justify-between items-center">
                <p>{item?.time}</p>
                <p>From &nbsp;$ {item?.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Trending;
