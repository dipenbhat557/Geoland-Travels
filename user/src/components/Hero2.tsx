import { heroBg } from "../assets";
import { useNavigate } from "react-router-dom";
import { heroIndex } from "../store";
import { useRecoilState } from "recoil";
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
      <div className=" absolute z-20 items-center justify-center top-[70%]  flex w-full">
        <button
          onClick={() => navigate("/contactus", { state: { fromHero: true } })}
          className="w-[70%] sm:w-[30%] animate-bounce py-2 font-semibold bg-[#06905E] text-white text-[22px] rounded-2xl"
        >
          Start your trip today
        </button>
      </div>
      <FaChevronLeft
        onClick={() => setHero((hero - 1) % 2)}
        className="absolute bg-primary rounded-full p-4 z-50 left-[5%] top-[40%] animate-pulse text-[45px] sm:text-[65px] cursor-pointer text-white"
      />
    </div>
  );
};
export default SectionWrapper(Hero2);
