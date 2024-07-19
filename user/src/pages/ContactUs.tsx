import { branchImg, heroBg } from "../assets";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { useState, useRef, useEffect, Suspense } from "react";

import { SectionWrapper } from "../hoc";
import * as emailjs from "emailjs-com";

import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import EarthCanvas from "../components/canvas/Earth";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Faq from "../components/Faq";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

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
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<SocialLinkData>();
  const location = useLocation();
  const fromHero: Boolean = location?.state?.fromHero || false;

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
        "service_p84msgo",
        "template_gfe9a1g",
        {
          from_name: form.name,
          to_name: "Geoland Travels",
          from_email: form.email,
          to_email: "bhattadipen557@gmail.com",
          message: `Branch: ${form.branch}\nSubject: ${form.subject}\nMessage: ${form.message}\nPlease reach me at\nContact number: ${form.contact}\nEmail: ${form.email}`,
        },
        "ZYkHf84J4hdD8bh0"
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
            branch: "",
            contact: "",
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
      console.error("Sorry the number is not linked");
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col sm:gap-5 h-auto">
        <Navbar isHome={true} />
        {!fromHero && (
          <div className="h-[480px] w-full relative ">
            <img src={heroBg} alt="bg" className="w-full h-full object-cover" />
            <p
              className={`${styles.primaryBgColor} px-3 py-2 text-white absolute bottom-0 left-5 rounded-t-lg`}
            >
              Connect with us
            </p>
          </div>
        )}

        <div className=" flex flex-col sm:flex-row gap-2 justify-between p-8 w-[90%] sm:w-[70%] mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full sm:w-[60%] mt-12 flex flex-col gap-3"
          >
            <div className="flex gap-3">
              <label className="flex flex-col">
                <span className=" font-medium mb-4">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className=" font-medium mb-4">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address "
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
                <option value="Riyadh, Saudi Arabia">
                  Riyadh, Saudi Arabia
                </option>
                <option value="Dammam, Saudi Arabia">
                  Dammam, Saudi Arabia
                </option>
                <option value="Dubai, U.A.E.">Dubai, U.A.E.</option>
                <option value="California, USA">California, USA</option>
                <option value="Ontario, Canada">Ontario, Canada</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Contact Number</span>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Subject</span>
              <input
                type="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200   rounded-lg outline-none  font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Leave your Message"
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
              className="hidden  sm:flex items-center justify-center  absolute -top-[30%]  w-full h-full"
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

        <div className="w-full sm:flex hidden h-[500px]">
          <img
            alt="branch img"
            src={branchImg}
            className="w-full h-full object-contain"
          />
        </div>

        {/* <ReachOut /> */}
        {/* <Glimpse /> */}
        {/* <WhyTour /> */}
        <Faq />
        <Footer isContact={true} />
      </div>
    </Suspense>
  );
};
export default SectionWrapper(ContactUs);
