import { heroBg } from "../assets";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { useState, useRef, useEffect } from "react";

import { SectionWrapper } from "../hoc";
import * as emailjs from "emailjs-com";

// import ReachOut from "../components/ReachOut";
import WhyTour from "../components/WhyTour";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import EarthCanvas from "../components/canvas/Earth";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Faq from "../components/Faq";

interface SocialLinkData {
  facebookLink: string;
  instaLink: string;
  whatsappLink: number;
}

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    branch: "",
  });
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<SocialLinkData>();

  useEffect(() => {
    const docRef = doc(db, "socialLinks", "cXM2ywx01R2BDRwHXFov");
    const fetcthing = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    console.log("on change data is ", form);
  };

  const handleSubmit = (e: any) => {
    console.log("DAta is ", form);
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_htp2klw",
        "template_a9c3yzv",
        {
          from_name: form.name,
          to_name: "Geoland Travels",
          from_email: form.email,
          to_email: "bhattadipen557@gmail.com",
          message: `This is to ${form.branch} branch of Geoland Travels. ${form.message}`,
        },
        "70gtdMrv58XYFp0DP"
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
            branch: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <div className="flex flex-col sm:gap-5 h-auto">
      <Navbar isHome={true} />
      <div className="h-[480px] w-full relative ">
        <img src={heroBg} alt="bg" className="w-full h-full object-cover" />
        <p
          className={`${styles.primaryBgColor} px-3 py-2 text-white absolute bottom-0 left-5 rounded-t-lg`}
        >
          Connect with us
        </p>
      </div>

      <div className=" flex flex-col sm:flex-row gap-2 justify-between p-8 w-[90%] sm:w-[70%] mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full sm:w-[60%] mt-12 flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Select Branch</span>
            <select
              className="p-2 border border-slate-200 cursor-pointer rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[10px] sm:placeholder:text-[12px]"
              onChange={handleChange}
              value={form.branch}
              name="branch"
            >
              <option value="">Select branch</option>
              <option value="Nepal">Nepal</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your subject</span>
            <input
              type="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's your subject?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border border-slate-200 font-medium"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className={`${styles.primaryBgColor} py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary text-white`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="w-[80%] sm:w-[30%] h-[150px] sm:h-[300px]  my-auto p-4 flex flex-col relative  rounded-3xl sm:justify-end  ">
          {/* EarthCanvas section */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="hidden  sm:flex items-center justify-center absolute -top-[30%]  w-full h-full"
          >
            <EarthCanvas />
          </motion.div>
          <div className="w-full h-full sm:h-[40%]  justify-between items-center  gap-3 flex flex-col">
            <p className="tet-[13px]">Follow us on</p>
            <div className="flex w-full h-[50%] justify-center gap-6">
              <FaWhatsapp
                onClick={handleWhatsAppClick}
                className="text-2xl text-green-600 cursor-pointer"
              />

              <FaFacebook
                onClick={() => window.open(links?.facebookLink, "_blank")}
                className="text-2xl  text-blue-600 cursor-pointer"
              />
              <FaInstagram
                onClick={() => window.open(links?.instaLink, "_blank")}
                className="text-2xl  text-pink-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ReachOut /> */}
      {/* <Glimpse /> */}
      <WhyTour />
      <Faq />
      <Footer isContact={true} />
    </div>
  );
};
export default SectionWrapper(ContactUs);
