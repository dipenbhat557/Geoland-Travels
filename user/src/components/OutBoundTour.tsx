import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { TourData, toursData } from "../store";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { def } from "../assets";

const OutboundTour = () => {
  const navigate = useNavigate();
  const tours: TourData[] = useRecoilValue(toursData);
  const [outboundItems, setOutboundItems] = useState<TourData[]>([]);

  useEffect(() => {
    let res = tours.filter((t: TourData) => t?.type === "outbound");
    res = res?.length > 4 ? res?.slice(0, 4) : res;
    setOutboundItems(res);
  }, []);

  return (
    <div className={`flex w-full ${styles.padding} h-[550px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%]`}>Outbound Tour</p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {outboundItems?.map((item, index) => {
          return (
            <div
              onClick={() => navigate("/details", { state: { tour: item } })}
              key={index}
              className="w-[23%] cursor-pointer border border-slate-200 h-[90%] p-2 justify-between rounded-3xl flex flex-col"
            >
              <div className="w-full h-[60%] rounded-3xl">
                <img
                  src={item?.img?.[0] || def}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="h-[8%] text-slate-400 flex items-center font-light text-[13px] ml-3">
                {item?.location}
              </p>
              <p className="h-[15%]  font-semibold flex items-center line-clamp-2">
                {item?.tourTitle}
              </p>

              <div className="w-[90%] text-[14px] h-[8%] justify-between  px-4 py-2 border-t border-slate-100 flex   items-center">
                <p>{item?.date?.slice(0, 15)}</p>
                <p>From &nbsp;NPR {item?.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() =>
            navigate("/destination", {
              state: { key: "type", val: "outbound" },
            })
          }
          className={`px-4 py-2 w-[20%] rounded-3xl right-0 text-white font-semibold ${styles?.primaryBgColor}`}
        >
          More
        </button>
      </div>
    </div>
  );
};
export default OutboundTour;
