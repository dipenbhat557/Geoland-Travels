import { useEffect, useState } from "react";
import { e1, e2, e3, exploreBg } from "../assets";
import { styles } from "../styles";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

interface InfoData {
  noOfDestinations: number;
  noOfTours: number;
  noOfCustomers: number;
}

const Explore = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<InfoData>({
    noOfDestinations: 0,
    noOfTours: 0,
    noOfCustomers: 0,
  });

  useEffect(() => {
    const docRef = doc(db, "ourInfo", "6ehvkjpjNJpYqIwTvuVd");
    const fetcthing = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setInfo({
          noOfDestinations: docSnap.data().noOfDestinations,
          noOfTours: docSnap.data().noOfTours,
          noOfCustomers: docSnap.data().noOfCustomers,
        });
      } else {
        console.log("No such document!");
      }
    };
    fetcthing();
  }, []);

  return (
    <div className={`${styles.padding} w-full h-[600px] sm:h-[500px]`}>
      <div className="relative w-full h-full flex flex-col sm:flex-row justify-center sm:gap-[10%] items-center">
        <div className="w-full h-full absolute bg-[#F6F6F6] -z-30" />
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 0.5)}
          className="w-[80%] sm:w-[30%] h-[40%] sm:h-auto flex flex-col gap-4"
        >
          <p
            className={`${styles.sectionHeadText} tracking-wider  font-bold  `}
          >
            We Make
            <br /> World Travel Easy
          </p>
          <p className="text-[12px] tracking-wider leading-loose font-light font-serif">
            Traveling under your own power and at your own pace, you'll connect
            more meaningfully with your destination and have more fun!
          </p>
          <button
            onClick={() => navigate("/destination")}
            className={`${styles.primaryBgColor} w-[50%] sm:w-[40%] rounded-lg text-[14px] py-2 text-white font-light `}
          >
            Explore Our Tours
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.4, 0.5)}
          className="w-full sm:w-[35%] h-[60%] sm:h-[80%] relative flex justify-around items-center"
        >
          <div className="w-[45%] h-full flex flex-col justify-between items-center">
            <div className="w-full h-[45%] flex flex-col bg-white rounded-lg items-center justify-center gap-2">
              <div className="w-[20%] h-[20%]">
                <img
                  src={e3}
                  alt="e3"
                  className="w-full h-full object-contain"
                />
              </div>
              <p
                className={` ${styles.primaryTextColor} text-[26px] font-bold `}
              >
                {info?.noOfDestinations}
              </p>
              <p className="font-light text-[14px]">Total Destinations</p>
            </div>
            <div className="w-full h-[45%] flex flex-col bg-white rounded-lg items-center justify-center gap-2">
              <div className="w-[20%] h-[20%]">
                <img
                  src={e2}
                  alt="e2"
                  className="w-full h-full object-contain"
                />
              </div>
              <p
                className={` ${styles.primaryTextColor} text-[26px] font-bold `}
              >
                {info?.noOfCustomers}
              </p>
              <p className="font-light text-[14px]">Happy Customers</p>
            </div>
          </div>
          <div className="w-[45%] h-[45%] flex flex-col bg-white rounded-lg items-center justify-center gap-2">
            <div className="w-[20%] h-[20%]">
              <img src={e1} alt="e1" className="w-full h-full object-contain" />
            </div>
            <p className={` ${styles.primaryTextColor} text-[26px] font-bold `}>
              {info?.noOfTours}
            </p>
            <p className="font-light text-[14px]">Amazing Tours</p>
          </div>
          <div className="w-full h-full absolute -z-20">
            <img src={exploreBg} className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default SectionWrapper(Explore);
