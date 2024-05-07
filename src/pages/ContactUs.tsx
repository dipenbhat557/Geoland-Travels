import { heroBg } from "../assets";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import EarthCanvas from "../components/canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ReachOut from "../components/ReachOut";
import WhyTour from "../components/WhyTour";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    branch: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Send email using emailjs
    // emailjs
    //   .send(
    //     "service_htp2klw",
    //     "template_a9c3yzv",
    //     {
    //       from_name: form.name,
    //       to_name: "Dipendra",
    //       from_email: form.email,
    //       to_email: "bhattadipen557@gmail.com",
    //       message: form.message,
    //     },
    //     "70gtdMrv58XYFp0DP"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       // Clear the form after successful submission
    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error: any) => {
    //       setLoading(false);
    //       console.log(error);
    //       alert("Something went wrong");
    //     }
    //   );
  };
  return (
    <div className="flex flex-col">
      <Navbar isHome={true} />
      <div className="h-[480px] w-full relative mt-14">
        <img src={heroBg} alt="bg" className="w-full h-full object-cover" />
        <p
          className={`${styles.primaryBgColor} px-3 py-2 text-white absolute bottom-0 left-5 rounded-t-lg`}
        >
          Connect with us
        </p>
        <div
          className={`${styles.padding}  xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}
        >
          {/* Contact form section */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="  p-8 rounded-2xl"
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>

            {/* Contact form */}
            <form
              //   ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
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
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200  text-white rounded-lg outline-none  font-medium"
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
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200  text-white rounded-lg outline-none  font-medium"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <span className=" font-medium mb-4">Select Branch</span>
                <select
                  className="p-2 border border-slate-200 cursor-pointer rounded-md shadow-sm shadow-slate-300 mb-2 placeholder:text-[10px] sm:placeholder:text-[12px]"
                  onChange={handleChange}
                  value={form.branch}
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
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary border border-slate-200  text-white rounded-lg outline-none  font-medium"
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
          </motion.div>

          {/* EarthCanvas section */}
          <motion.div
            variants={slideIn("right", "spring", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
        <ReachOut />
        <WhyTour />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};
export default SectionWrapper(ContactUs);
