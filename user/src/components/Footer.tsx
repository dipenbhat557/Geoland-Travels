import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";
import { useEffect, useRef, useState } from "react";
import { TourData, toursData } from "../store";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface SocialLinkData {
  facebookLink: string;
  instaLink: string;
  whatsappLink: number;
}

const Footer = ({ isContact }: { isContact: boolean }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchResult, setSearchResult] = useState<TourData[]>([]);
  const tours = useRecoilValue(toursData);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const [links, setLinks] = useState<SocialLinkData>();

  useEffect(() => {
    const docRef = doc(db, "socialLinks", "cXM2ywx01R2BDRwHXFov");
    const fetcthing = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setLinks({
          facebookLink: docSnap.data().facebookLink,
          instaLink: docSnap.data().instaLink,
          whatsappLink: docSnap.data().whatsappLink,
        });
      } else {
        console.log("No such document!");
      }
    };
    fetcthing();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef2.current && !boxRef2.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const receiverNumber = links?.whatsappLink;
    if (receiverNumber) {
      const whatsappURL = `https://wa.me/${receiverNumber}`;
      window.open(whatsappURL, "_blank");
    } else {
      console.error("WhatsApp number not provided");
    }
  };

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
      className={`${styles.padding} w-full h-[350px] bg-[#37383C] flex justify-between`}
    >
      <div className="w-[65%] h-[80%] flex flex-col justify-around">
        <div className="w-full h-[40%] gap-3 flex flex-col">
          <p className="text-[22px] font-bold text-white">
            Let's go on adventure !!
          </p>
          <div className="w-[80%] h-[40%] rounded-lg flex justify-around items-center bg-white">
            <input
              value={searchQuery}
              onChange={handleSearchInputChange}
              type="text "
              placeholder="Search your destination"
              className="placeholder:text-slate-300   focus:outline-none rounded-lg placeholder:text-[10px] px-3 w-[80%] py-1"
            />
            <button
              onClick={handleSearchButtonClick}
              className={`${styles.primaryBgColor} text-white w-[15%] rounded-lg flex items-center justify-center h-[80%]`}
            >
              Search
            </button>
          </div>
        </div>
        {clicked &&
          (searchResult?.length > 0 ? (
            <div
              ref={boxRef2}
              className="w-[47%] rounded-b-lg absolute z-20  left-[4.6%] mt-44  h-[200px] overflow-y-scroll"
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
                        navigate("/destination", { state: { tour: s } })
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
              ref={boxRef2}
              className="w-[47%] rounded-b-lg absolute z-20  left-[4.6%] mt-5 bg-slate-200   flex items-center justify-center  h-[50px] "
            >
              "No results found"
            </div>
          ))}
        <div className="w-[80%] h-[30%] gap-3 flex justify-between">
          <div className="w-[60%] h-full gap-4 flex flex-col">
            <div className="w-[35%] h-[70%] cursor-pointer">
              <img
                onClick={() => window?.scrollTo(0, 0)}
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
              <p
                onClick={() => navigate("/destination")}
                className="cursor-pointer"
              >
                Tours
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[30%] h-[80%] flex flex-col items-center gap-3 ${
          isContact ? "justify-center" : ""
        } `}
      >
        {!isContact && (
          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
            <EarthCanvas />
          </motion.div>
        )}
        <div className="w-full h-[40%] items-center text-white gap-3 flex flex-col">
          <p className="tet-[13px]">Follow us on</p>
          <div className="flex w-full h-[50%] justify-center gap-6">
            <FaWhatsapp
              onClick={handleWhatsAppClick}
              className="text-2xl cursor-pointer"
            />

            <FaFacebook
              onClick={() => window.open(links?.facebookLink, "_blank")}
              className="text-2xl cursor-pointer"
            />
            <FaInstagram
              onClick={() => window.open(links?.instaLink, "_blank")}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
