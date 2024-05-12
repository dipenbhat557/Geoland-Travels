import { FaHandshake } from "react-icons/fa6";
import { a1, a2, a3, a4, aboutBg, map } from "../assets";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineQuestionMark } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-5 h-auto">
      <Navbar isHome={true} />
      <div
        className="h-[580px] flex justify-center items-end w-full relative mt-14"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="w-[50%] h-[15%] flex flex-col">
          <div
            className={`w-full flex items-center justify-center h-[70%] bg-primary text-white font-semibold text-[25px]`}
          >
            About Geoland Travels
          </div>
          <div className="w-full h-[30%] bg-white" />
        </div>
      </div>
      <div className={`${styles.padding} flex flex-col gap-9 h-auto w-full`}>
        <div className="border border-black rounded-lg p-5 leading-loose tracking-wide">
          Geoland Travels and Tours, a registered Private Limited company in
          Nepal, boasts 10 years of experience backed by seasoned professionals
          with over 20 years in tourism. With 24 skilled staff, we specialize in
          airline ticketing, luxury coaches, and deluxe tours, offering
          personalized services including hotel bookings, package tours, and
          cultural experiences. Our online booking system simplifies ticketing
          for domestic and international travel. As trusted members of NATTA and
          IATA, we're renowned in Dubai and Nepal as a leading tour operator and
          Destination Management Company. Our focus extends globally, with
          expertise in Asia, the Middle East, Europe, and beyond, while
          promoting Nepal's diverse attractions. We prioritize teamwork, Turn
          Around Time (TAT), and collaboration with travel partners worldwide.
        </div>
        <div className="flex flex-col items-center gap-5 p-4">
          <p className="text-[27px] w-[70%] text-center font-semibold">
            TRAVEL TIPS : HERE YOU’LL FIND LOADS OF USEFUL INFO TO HELP GET YOU
            PREPARED BEFORE SETTING OFF ON YOUR TRIP
          </p>
          <button className="px-9 py-3 rounded-lg bg-primary text-white">
            Click Here
          </button>
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

        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <p className="font-bold text-[45px]">Our</p>
            <p className="font-bold text-[45px] text-primary">Mission</p>
          </div>
          <div className="border-b-4 border-slate-200 w-[40%]" />
          <p className="font-medium text-[20px] py-4">
            To establish as one of the most promonent and professional travel
            agency with aim to global expansion and networking.
          </p>

          <p className="text-[22px] font-semibold py-4">Guiding Principles</p>

          <ul className="list-disc flex flex-col gap-3">
            <li>
              Apply the highest standard of customer service all of the time
            </li>
            <li>Provide a great work environment for our team</li>
            <li>Embrace and motivate team to reach organization goals</li>
            <li>
              Embrace diversity and connect to travel trade around the world
            </li>
            <li>Contribute positively to our community and environment</li>
            <li>Doing business ethically and apply moral principles.</li>
          </ul>
        </div>
        <div className="w-full py-4 flex flex-col items-center justify-between">
          <div className="w-full h-auto flex items-center justify-center">
            <div className="h-full w-[30%] flex flex-col gap-3 items-center border rounded-2xl border-primary p-3">
              <FaHandshake className="text-primary text-[50px]" />
              <p className="text-[22px] font-semibold">Our Commitment</p>
              <ul className="list-disc flex flex-col gap-3">
                <li>Respect for our Customers</li>
                <li>Trust and Integrity</li>
                <li>Open Mindedness and Consistency</li>
                <li>Corporate Incentive Deals</li>
                <li> Safety and Security</li>
              </ul>
            </div>
          </div>

          <div className="w-full h-auto flex justify-between items-center">
            <div className="w-[30%] h-full flex flex-col gap-3 items-center border rounded-2xl border-primary p-3">
              <MdOutlineMiscellaneousServices className="text-primary text-[50px]" />
              <p className="text-[22px] font-semibold">Our Services</p>
              <ul className="list-disc flex flex-col gap-3">
                <li>Ticketing</li>
                <li>UAE Tourist Visa</li>
                <li>Global Visa Consulation Service </li>
                <li>Corporate Incentive Deals</li>
                <li>International Tour Packages</li>
                <li>Exclusive Education Tour Package</li> <li>MICE</li>
                <li>Trekking and Hiking</li> <li>Hotel Booking</li>{" "}
                <li>Religious Tour</li>
              </ul>
            </div>
            <div className="w-[30%] h-full flex flex-col gap-3 items-center border rounded-2xl border-primary p-3">
              <MdOutlineQuestionMark className="text-primary text-[50px]" />
              <p className="text-[22px] font-semibold">Why Choose Us?</p>
              <ul className="list-disc flex flex-col gap-3">
                <li>Expertise and Experience</li>
                <li>Wide Range of Destinations</li>
                <li>Exclusive Deals and Discounts </li>
                <li>Corporate Incentive Deals</li>
                <li>Customer Support and Assistance</li>
                <li>Convenience and Time Savings</li>
                <li>Trust and Reliability</li>
                <li>Ease of Booking and Payment Options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer isContact={false} />
    </div>
  );
};
export default AboutUs;
