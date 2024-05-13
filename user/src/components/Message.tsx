import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { def } from "../assets";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Message = () => {
  const [message, setMessage] = useState({
    name: "",
    message: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    img: "",
  });

  useEffect(() => {
    const docRef = doc(db, "messages", "QrQ6SBmLF4SCtlmI5dnB");
    const fetcthing = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setMessage({
          name: docSnap?.data()?.name,
          message: docSnap?.data()?.message,
          facebook: docSnap?.data()?.facebook,
          instagram: docSnap?.data()?.instagram,
          linkedin: docSnap?.data()?.linkedin,
          img: docSnap?.data()?.img,
        });
      } else {
        console.log("No such document!");
      }
    };
    fetcthing();
  }, []);
  return (
    <div
      id="messagefrommd"
      className={`${styles.padding} bg-[#F9F9F6] w-full h-[800px] sm:h-[650px] flex justify-center items-center`}
    >
      <div className="w-[95%] h-[95%] shadow-md shadow-slate-400  flex-col sm:flex-row justify-between rounded-lg flex ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.6)}
          className="w-full sm:w-[45%] h-[50%] sm:h-full rounded-l-lg"
        >
          <img
            src={message?.img || def}
            alt="founder"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.6)}
          className={`${styles.padding} w-full sm:w-[55%] h-[50%] sm:h-full flex flex-col items-center justify-between`}
        >
          <p className={`${styles.sectionHeadText} text-center`}>
            Message From MD
          </p>
          <p className="sm:w-[95%] font-light text-[12px] sm:text-[18px] overflow-y-scroll text-center sm:tracking-wider sm:leading-loose">
            {message?.message}
          </p>
          <p className="w-full text-right text-slate-600">-{message?.name}</p>
          <div className="w-[60%] h-[8%] sm:h-[15%] flex items-center justify-around">
            <FaFacebook
              onClick={() => window.open(message?.facebook, "_blank")}
              className="cursor-pointer text-2xl sm:text-3xl text-blue-600"
            />
            <FaLinkedin
              onClick={() => window.open(message?.linkedin, "_blank")}
              className="cursor-pointer  text-2xl sm:text-3xl text-blue-600"
            />
            <FaInstagram
              onClick={() => window.open(message?.instagram, "_blank")}
              className="cursor-pointer  text-2xl sm:text-3xl text-pink-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default SectionWrapper(Message);
