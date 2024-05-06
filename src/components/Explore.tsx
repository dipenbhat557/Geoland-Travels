import { e1, e2, e3, exploreBg } from "../assets";
import { styles } from "../styles";

const Explore = () => {
  return (
    <div className={`${styles.padding} w-full h-[500px]`}>
      <div className="relative w-full h-full flex justify-center gap-[10%] items-center">
        <div className="w-full h-full absolute bg-[#F6F6F6] -z-30" />
        <div className="w-[30%]  flex flex-col gap-4">
          <p
            className={`${styles.sectionHeadText} tracking-wider  font-bold  `}
          >
            We Make<br></br> World Travel Easy
          </p>
          <p className="text-[12px] tracking-wider leading-loose font-light font-serif">
            Traveling under your own power and at your own pace, you'll connect
            more meaningfully with your destination and have more fun!
          </p>
          <button
            className={`${styles.primaryBgColor} w-[40%] rounded-lg text-[14px] py-2 text-white font-light `}
          >
            Explore Our Tours
          </button>
        </div>
        <div className="w-[35%] h-[80%] relative flex justify-around items-center">
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
                240
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
                92,842
              </p>
              <p className="font-light text-[14px]">Happy Customers</p>
            </div>
          </div>
          <div className="w-[45%] h-[45%] flex flex-col bg-white rounded-lg items-center justify-center gap-2">
            <div className="w-[20%] h-[20%]">
              <img src={e1} alt="e1" className="w-full h-full object-contain" />
            </div>
            <p className={` ${styles.primaryTextColor} text-[26px] font-bold `}>
              3672
            </p>
            <p className="font-light text-[14px]">Amazing Tours</p>
          </div>
          <div className="w-full h-full absolute -z-20">
            <img src={exploreBg} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
