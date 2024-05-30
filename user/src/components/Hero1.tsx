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
import { FaChevronRight } from "react-icons/fa6";

const Hero1 = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchResult, setSearchResult] = useState<TourData[]>([]);
  const tours = useRecoilValue(toursData);
  const boxRef = useRef<HTMLDivElement>(null);
  const [hero, setHero] = useRecoilState(heroIndex);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    if (searchQuery.trim() !== "") {
      const searchResults = tours.filter((t: TourData) =>
        t?.tourTitle?.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
    }
    setClicked(true);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      const searchResults = tours.filter((t: TourData) =>
        t?.tourTitle.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
      console.log(searchResult);
    }
    setClicked(true);
  };

  return (
    <div
      className="h-[500px] sm:h-[580px] w-full relative mt-0 sm:mt-14"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full h-full z-10 absolute  opacity-10" />
      <div className="w-full h-full absolute z-20 flex items-center justify-center flex-col ">
        <div className="w-full h-[90%] sm:h-[50%] flex items-center justify-center flex-col gap-14 sm:gap-3">
          <motion.p className="sm:w-[43%] text-center text-[25px]  sm:text-[40px] text-white font-semibold">
            {"Choose a Destination For Your ".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />

            {"Next Adventure?".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={textVariant(0.9)}
            className="text-[14px] font-light text-white tracking-wider"
          >
            From local escapes to far-flung adventures
          </motion.p>
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.6)}
            className="w-[80%] sm:w-[30%] items-center justify-around h-[10%] sm:h-[20%] rounded-full bg-white flex"
          >
            <IoLocationOutline className="text-3xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="w-[70%] px-2 sm:py-2  focus:outline-none rounded-md placeholder:text-[13px]"
              placeholder="Search destination"
            />
            <div
              onClick={handleSearchButtonClick}
              className={`${styles.primaryBgColor} rounded-full flex items-center justify-center w-[40px] cursor-pointer h-[40px]`}
            >
              <AiOutlineSearch className="text-white text-2xl" />
            </div>
          </motion.div>
          {clicked &&
            (searchResult?.length > 0 ? (
              <div
                ref={boxRef}
                className="w-[70%] sm:w-[30%] rounded-b-md absolute z-50 left-[15%] sm:left-[35%] top-[57%] sm:top-[61%] h-auto"
              >
                {searchResult?.map((s, i) => {
                  return (
                    <div
                      key={i}
                      className={`w-full  cursor-pointer h-auto p-3 bg-slate-200 border-b border-slate-300 flex items-center justify-center ${
                        i === searchResult?.length - 1 ? "rounded-b-lg" : ""
                      }`}
                    >
                      <p
                        onClick={() =>
                          navigate("/details", { state: { tour: s } })
                        }
                      >
                        {s?.tourTitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                ref={boxRef}
                className="w-[70%] sm:w-[30%] bg-slate-200 absolute z-50  flex items-center justify-center  h-[50px] left-[15%] sm:left-[35%] top-[57%] sm:top-[61%] -b-lg"
              >
                "No results found"
              </div>
            ))}
        </div>
        <div className="w-[60%] h-[20%] hidden  sm:flex items-end justify-between">
          {["Nature", "Adventure", "Culture", "Food", "City", "Cruise"].map(
            (e, i) => {
              return (
                <motion.button
                  variants={fadeIn("up", "spring", 0.2 * i, 0.5)}
                  key={i}
                  onClick={() =>
                    navigate("/destination", {
                      state: { key: "category", val: e },
                    })
                  }
                  className="text-white bg-opacity-10 hover:bg-opacity-40 bg-slate-100 rounded-full w-[100px] py-2"
                >
                  {e}
                </motion.button>
              );
            }
          )}
        </div>
      </div>
      <FaChevronRight
        onClick={() => setHero((hero + 1) % 2)}
        className="absolute  bg-primary rounded-full p-4 z-50 right-[5%] top-[40%] animate-pulse text-[45px] sm:text-[65px] cursor-pointer text-white"
      />
    </div>
  );
};
export default SectionWrapper(Hero1);
