import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { useEffect, useState } from "react";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { def } from "../assets";

import { motion } from "framer-motion";

interface ImageData {
  title: string;
  date: string;
  img: string;
  id: string;
}

const Glimpse = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const gotImages: ImageData[] = [];
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "glimpses"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.date;
        let dateObject = "";

        if (date instanceof Timestamp) {
          dateObject = date.toDate().toString().slice(0, 21);
          // console.log("Date:", dateObject);
        } else {
          console.error("Invalid or missing date field:", date);
        }

        const f: ImageData = {
          title: doc?.data()?.title,
          date: dateObject,
          img: doc?.data()?.img,
          id: doc?.id,
        };
        gotImages.push(f);
      });
      setImages(gotImages);
    };

    fetchDocuments();
  }, []);

  return (
    <div
      className={`${styles.padding} w-full h-[700px] sm:h-[900px] flex flex-col`}
    >
      <p className={`${styles.sectionHeadText} h-[6%]`}>Glimpses</p>
      <motion.div
        variants={fadeIn("up", "spring", 0.95, 2.75)}
        className="h-[45%] m-auto overflow-hidden relative "
      >
        <ul className="flex gap-3 sm:gap-5 h-full w-[calc(350px*9)] animate-scroll infinite">
          {images?.map((item: ImageData, i: number) => (
            <div
              key={i}
              onClick={() =>
                window.open(item?.img, "_blank", "rel=noopener noreferrer")
              }
              className="w-[250px] sm:w-[650px] cursor-pointer rounded-lg h-full"
            >
              <img
                className="h-full rounded-lg w-full object-cover"
                src={item?.img || def}
              />
            </div>
          ))}
        </ul>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "spring", 0.95, 2.75)}
        className="h-[45%] m-auto overflow-hidden relative "
      >
        <ul className="flex gap-3 sm:gap-5 h-full w-[calc(350px*9)] animate-scrolled infinite">
          {images?.reverse()?.map((item: ImageData, i: number) => (
            <div
              key={i}
              onClick={() =>
                window.open(item?.img, "_blank", "rel=noopener noreferrer")
              }
              className="w-[250px] sm:w-[650px] cursor-pointer rounded-lg h-full"
            >
              <img
                className="h-full rounded-lg w-full object-cover"
                src={item?.img || def}
              />
            </div>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
export default Glimpse;
