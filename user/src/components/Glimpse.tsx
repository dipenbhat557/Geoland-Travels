import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { galleryItems, galleryItems2 } from "../constants";

const Glimpse = () => {
  return (
    <div className={`${styles.padding} w-full h-[900px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[6%]`}>Glimpses</p>
      <motion.div
        variants={fadeIn("up", "spring", 0.95, 2.75)}
        className="h-[45%] m-auto overflow-hidden relative "
      >
        <ul className="flex  gap-5 h-full w-[calc(350px*9)] animate-scroll infinite">
          {galleryItems?.map((item: string, i: number) => (
            <div
              key={i}
              onClick={() =>
                window.open(item, "_blank", "rel=noopener noreferrer")
              }
              className="w-[150px] sm:w-[650px] cursor-pointer rounded-lg h-full"
            >
              <img
                className="h-full rounded-lg w-full object-cover"
                src={item}
              />
            </div>
          ))}
        </ul>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "spring", 0.95, 2.75)}
        className="h-[45%] m-auto overflow-hidden relative "
      >
        <ul className="flex  gap-5 h-full w-[calc(350px*9)] animate-scrolled infinite">
          {galleryItems2?.map((item: string, i: number) => (
            <div
              key={i}
              onClick={() =>
                window.open(item, "_blank", "rel=noopener noreferrer")
              }
              className="w-[150px] sm:w-[650px] cursor-pointer rounded-lg h-full"
            >
              <img
                className="h-full rounded-lg w-full object-cover"
                src={item}
              />
            </div>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
export default Glimpse;
