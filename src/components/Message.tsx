import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { founder } from "../assets";
import { styles } from "../styles";

const Message = () => {
  return (
    <div
      className={`${styles.padding} bg-[#F9F9F6] w-full h-[650px] flex justify-center items-center`}
    >
      <div className="w-[95%] h-[95%] shadow-md shadow-slate-400 justify-between rounded-lg flex ">
        <div className="w-[45%] h-full rounded-l-lg">
          <img
            src={founder}
            alt="founder"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div
          className={`${styles.padding} w-[55%] h-full flex flex-col items-center justify-between`}
        >
          <p className={`${styles.sectionHeadText} text-center`}>
            Message From MD
          </p>
          <p className="w-[95%] font-light text-[18px] overflow-y-scroll text-center tracking-wider leading-loose">
            “Welcome to GeoLand Travels, where your adventure begins! Our
            personalized journeys cater to your desires and budget, offering
            cultural immersion, adrenaline-fueled escapades, or serene getaways.
            With customizable itineraries tailored to match your interests,
            preferences, and budget, we'll create a journey as extraordinary as
            you are. Explore majestic mountains, pristine beaches, and vibrant
            cities as you immerse yourself in local culture and create memories
            to last a lifetime. Contact us today to start planning your next
            unforgettable adventure with GeoLand Travels!”
          </p>
          <div className="w-[60%] h-[15%] flex items-center justify-around">
            <FaFacebook className="text-3xl text-blue-600" />
            <FaLinkedin className="text-3xl text-blue-600" />
            <FaInstagram className="text-3xl text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
