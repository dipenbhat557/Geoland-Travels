import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";

const Footer = ({ isContact }: { isContact: boolean }) => {
  return (
    <div
      className={`${styles.padding} w-full h-[350px] bg-[#37383C] flex justify-between`}
    >
      <div className="w-[65%] h-[80%] flex flex-col justify-around">
        <div className="w-full h-[40%] gap-3 flex flex-col">
          {" "}
          <p className="text-[22px] font-bold text-white">
            Let's go on adventure !!
          </p>
          <div className="w-[80%] h-[40%] rounded-lg flex justify-around items-center bg-white">
            <input
              type="text "
              placeholder="Search your destination"
              className="placeholder:text-slate-300   focus:outline-none rounded-lg placeholder:text-[10px] px-3 w-[80%] py-1"
            />
            <button
              className={`${styles.primaryBgColor} text-white w-[15%] rounded-lg flex items-center justify-center h-[80%]`}
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-[80%] h-[30%] gap-3 flex justify-between">
          <div className="w-[60%] h-full gap-4 flex flex-col">
            <div className="w-[35%] h-[70%] cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="w-[80%] text-white font-light text-[14px]">
              "Embark on Unforgettable Adventures with Our Expertise: Where
              Every Destination Becomes a Story."
            </p>
          </div>
          <div className="w-[30%] h-full flex justify-center text-white items-center">
            <div className="w-[50%] h-full flex flex-col justify-between items-center">
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">About</p>
            </div>

            <div className="w-[50%] h-full flex flex-col justify-between items-center">
              <p className="cursor-pointer">Gallery</p>
              <p className="cursor-pointer">Tours</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[30%] h-[80%] flex flex-col items-center gap-3 ${
          isContact ? "justify-center" : ""
        } `}
      >
        {/* EarthCanvas section */}
        {!isContact && (
          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
            <EarthCanvas />
          </motion.div>
        )}
        <div className="w-full h-[40%] items-center text-white gap-3 flex flex-col">
          <p className="tet-[13px]">Follow us on</p>
          <div className="flex w-full h-[50%] justify-center gap-6">
            <FaFacebook className="cursor-pointer" />
            <FaWhatsapp className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
