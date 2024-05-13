import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { TourData, toursData } from "../store";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { def } from "../assets";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
    <div
      className={`flex w-full ${styles.padding} h-auto sm:h-[550px] gap-4 sm:gap-0 flex flex-col`}
    >
      <motion.p
        variants={textVariant(0.3)}
        className={`${styles.sectionHeadText} h-[10%]`}
      >
        Outbound Tour
      </motion.p>
      <div className="w-full h-[90%] flex  gap-6 sm:gap-0 flex-wrap justify-between items-center">
        {outboundItems?.map((item, index) => {
          return (
            <motion.div
              variants={textVariant(0.2 * index)}
              onClick={() => navigate("/details", { state: { tour: item } })}
              key={index}
              className="w-[45%] sm:w-[23%] cursor-pointer border border-slate-200 h-[280px] sm:h-[90%] p-1 sm:p-2 gap-1 rounded-3xl flex flex-col"
            >
              <div className="w-full h-[60%] rounded-3xl">
                <img
                  src={item?.img?.[0] || def}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="h-[8%] text-slate-400 flex items-center font-light text-[10px] sm:text-[13px] ml-3">
                {item?.location}
              </p>
              <p className="h-auto sm:h-[15%] text-[12px] sm:text-[16px] font-semibold flex items-center line-clamp-2">
                {item?.tourTitle}
              </p>

              <div className="w-full sm:w-[90%] text-[8px] overflow-y-hidden sm:text-[14px] h-auto justify-between px-2 py-1  sm:px-4 sm:py-2 border-t border-slate-100 flex   items-center">
                <p className="w-[40%] ">{item?.date?.slice(0, 15)}</p>
                <p className="w-[40%]">From &nbsp;NPR {item?.price}</p>
              </div>
            </motion.div>
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
          className={`px-4 text-[13px] sm:text-[16px] py-1 sm:py-2 w-[30%] sm:w-[20%] rounded-3xl right-0 text-white font-semibold ${styles?.primaryBgColor}`}
        >
          More
        </button>
      </div>
    </div>
  );
};
export default SectionWrapper(OutboundTour);
