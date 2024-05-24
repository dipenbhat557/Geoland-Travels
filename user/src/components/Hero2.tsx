import { AiOutlineSearch } from "react-icons/ai";
import { heroBg } from "../assets";
import { styles } from "../styles";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { TourData, heroIndex, toursData } from "../store";
import { useRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaChevronLeft } from "react-icons/fa6";

const Hero2 = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useRecoilState(heroIndex);

  return (
    <div
      className="h-[500px] sm:h-[580px] w-full relative mt-0 sm:mt-14"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full h-full z-10 absolute  opacity-10" />
      <div className=" absolute z-20 items-center justify-center top-[40%]  flex w-full">
        <button
          onClick={() => navigate("/contactus")}
          className="w-[40%] py-2 font-semibold bg-[#06905E] text-white text-[22px] rounded-2xl"
        >
          {" "}
          Start your trip today
        </button>
      </div>
      <FaChevronLeft
        onClick={() => setHero((hero - 1) % 2)}
        className="absolute z-50 left-[5%] top-[40%] text-[65px] cursor-pointer text-white"
      />
    </div>
  );
};
export default SectionWrapper(Hero2);
