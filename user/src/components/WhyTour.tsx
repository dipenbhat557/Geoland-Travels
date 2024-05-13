import { whyTourItems } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const WhyTour = () => {
  return (
    <div
      className={`${styles.padding} w-full h-auto sm:h-[450px] flex flex-col`}
    >
      <motion.p
        variants={textVariant(0.3)}
        className={`${styles.sectionHeadText} h-[5%] sm:h-[12%] text-center`}
      >
        Why to Choose Us?
      </motion.p>
      <div className="w-full h-[87%] flex flex-wrap flex-row justify-between items-center">
        {whyTourItems?.map((item, index) => {
          return (
            <motion.div
              variants={textVariant(0.2 * index)}
              key={index}
              className="w-[50%] sm:w-[23%] h-[240px] sm:h-full p-2 rounded-3xl gap-2 flex flex-col"
            >
              <div className="w-full h-[30%] sm:h-[45%] flex items-end justify-center">
                <img
                  src={item?.img}
                  alt="trending"
                  className="w-[20%] h-[50%] object-contain "
                />
              </div>
              <p className=" font-semibold text-[13px] sm:text-[16px] text-center flex justify-center tracking-wider line-clamp-2">
                {item?.title}
              </p>
              <div className=" text-[14px]  line-clamp-5 sm:leading-loose tracking-wide overflow-y-hidden text-center  text-slate-600">
                <p>{item?.content}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionWrapper(WhyTour);
