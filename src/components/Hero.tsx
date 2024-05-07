import { AiOutlineSearch } from "react-icons/ai";
import { heroBg } from "../assets";
import { styles } from "../styles";
import { IoLocationOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div
      className="h-[580px] w-full relative mt-14"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full h-full z-10 absolute  opacity-10" />
      <div className="w-full h-full absolute z-20 flex items-center justify-center flex-col ">
        <div className="w-full h-[50%] flex items-center justify-center flex-col gap-3">
          <p className="w-[45%] text-center text-[45px] text-white font-semibold">
            Choose a Destination For Your Next Adventure?
          </p>
          <p className="text-[14px] font-light text-white tracking-wider">
            From local escapes to far-flung adventures
          </p>
          <div className="w-[30%] items-center justify-around h-[20%] rounded-full bg-white flex">
            <IoLocationOutline className="text-3xl" />
            <input
              type="text"
              className="w-[70%] px-2 py-2  focus:outline-none rounded-md placeholder:text-[13px]"
              placeholder="Search destination"
            />
            <div
              className={`${styles.primaryBgColor} rounded-full flex items-center justify-center w-[40px] cursor-pointer h-[40px]`}
            >
              <AiOutlineSearch className="text-white text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[20%] flex items-end justify-between">
          {["Culture", "Food", "Nature", "Adventure"].map((e, i) => {
            return (
              <button
                key={i}
                className="text-white bg-opacity-10 bg-slate-100 rounded-full w-[100px] py-2"
              >
                {e}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hero;
