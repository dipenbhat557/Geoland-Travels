import { useNavigate } from "react-router-dom";
import { destItems, trendingItems } from "../constants";
import { styles } from "../styles";

const OutboundTour = () => {
  const navigate = useNavigate();
  return (
    <div className={`flex w-full ${styles.padding} h-[550px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%]`}>Outbound Tour</p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {trendingItems?.map((item, index) => {
          return (
            <div
              onClick={() =>
                navigate("/details", { state: { tour: destItems?.[0] } })
              }
              key={index}
              className="w-[23%] border cursor-pointer border-slate-200 h-[90%] p-2 rounded-3xl flex flex-col"
            >
              <div className="w-full h-[60%] rounded-3xl">
                <img
                  src={item?.img}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
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
export default OutboundTour;
