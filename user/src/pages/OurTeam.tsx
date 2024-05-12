import { useState } from "react";
import { a1, a2, a3, a4, def, heroBg, map } from "../assets";
import Navbar from "../components/Navbar";
import { team } from "../constants";
import { styles } from "../styles";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const OurTeam = () => {
  const [teamIndex, setTeamIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5 h-auto">
      <Navbar isHome={true} />
      <div
        className="h-[580px] flex justify-center items-end w-full relative mt-14"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="w-[50%] h-[15%] flex flex-col">
          <div
            className={`w-full flex items-center justify-center h-[70%] bg-primary text-white font-semibold text-[25px]`}
          >
            Our Team
          </div>
          <div className="w-full h-[30%] bg-white" />
        </div>
      </div>
      <div
        className={`p-4 flex flex-col sm:flex-row w-full h-auto  justify-between`}
      >
        <div className="h-full w-full sm:w-[18%] flex flex-col shadow-xl p-3">
          <div
            className={` ${
              teamIndex == 0
                ? "bg-primary text-white"
                : "bg-[#D9D9D9] text-black"
            } text-[16px] p-3 cursor-pointer`}
            onClick={() => setTeamIndex(0)}
          >
            Board Team
          </div>
          <div
            className={` ${
              teamIndex == 1
                ? "bg-primary text-white"
                : "bg-[#D9D9D9] text-black"
            } text-[16px] p-3 cursor-pointer`}
            onClick={() => setTeamIndex(1)}
          >
            Staff Team
          </div>
        </div>

        <div className="flex flex-col h-full mt-3 sm:my-0 w-full sm:w-[75%] ">
          <p className="text-[16px] font-semibold my-3">
            {teamIndex === 0 ? "Meet our Board Team" : "Meet our Staff Team"}
          </p>

          <div className="w-full h-auto  flex flex-wrap gap-5 items-center justify-between">
            {team?.[teamIndex].map((member, index) => {
              return (
                <div
                  key={index}
                  className="w-[40%] sm:w-[33%] md:[28%] h-auto flex flex-col justify-around m-3 shadow-xl hover:bg-primary hover:text-white "
                >
                  <img
                    className="w-full h-[250px] object-cover"
                    src={member?.img || def}
                    alt={`faculty-${index}`}
                  />
                  <p className="text-[16px] sm:text-[18px] font-semibold h-[18%] p-3">
                    {member?.name}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: member?.role,
                    }}
                    className="text-[14px] sm:text-[16px] h-[18%] text-slate-400 hover:text-slate-200 p-3"
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`${styles.padding} flex flex-col items-center gap-4`}>
        <p className="font-bold text-[47px]">We’re here for you </p>
        <p className="font-bold text-[47px] text-primary">
          no matter where you are
        </p>
        <div className=" w-[40%] border-b-4 border-slate-200" />
      </div>

      <div className="w-full h-[450px]">
        <img src={map} className="w-full h-full object-contain" alt="map" />
      </div>
      <div className="flex w-full h-[150px] justify-between items-center">
        <div className="w-[20%] h-full">
          <img
            src={a1}
            alt="achievement"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[20%] h-full">
          <img
            src={a2}
            alt="achievement"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[20%] h-full">
          <img
            src={a3}
            alt="achievement"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[20%] h-full">
          <img
            src={a4}
            alt="achievement"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <Faq />
      <Footer isContact={false} />
    </div>
  );
};
export default OurTeam;
