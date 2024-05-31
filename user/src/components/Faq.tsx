import { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface FaqData {
  title: string;
  date: string;
  query: string;
  answer: string;
  id: string;
}

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState<FaqData[]>([]);

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const gotFaqs: { data: FaqData; dateObj: Date }[] = [];
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "faqs"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.date;
        let dateObject: Date | null = null;

        if (date instanceof Timestamp) {
          dateObject = date.toDate();
        } else {
          console.error("Invalid or missing date field:", date);
        }

        if (dateObject) {
          const f: FaqData = {
            title: doc?.data()?.title,
            date: "",
            query: doc?.data()?.query,
            answer: doc?.data()?.answer,
            id: doc?.id,
          };
          gotFaqs.push({ data: f, dateObj: dateObject });
        }
      });

      gotFaqs?.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

      const sortedFaqs: FaqData[] = gotFaqs?.map((entry) => {
        return {
          ...entry.data,
          date: entry.dateObj.toString().slice(0, 21),
        };
      });
      setFaqs(sortedFaqs);
    };

    fetchDocuments();
  }, []);

  return (
    <div className={`${styles.padding} w-full  `}>
      {/* <div className="flex justify-center"> */}
      <div className="flex justify-between w-full h-auto ">
        <motion.div
          variants={slideIn("left", "spring", 0.6, 1.4)}
          className="w-[95%] pl-8 px-6 h-auto"
        >
          <div
            className={`${styles.sectionHeadText} tracking-wider font-medium flex flex-wrap pb-7`}
          >
            <p className="w-full">FREQUENTLY </p>
            <p>ASKED</p>&nbsp;&nbsp;
            <p className="text-primary">QUESTIONS</p>
          </div>
          <div className=" sm:max-w-4xl w-auto sm:mx-4 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4  border-opacity-50 border-2 w-full rounded border-slate-200 p-3  "
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="sm:text-lg font-serif font-semibold ">
                    {faq.query}
                  </h3>
                  <button
                    className="text-primary focus:outline-none "
                    aria-expanded={expandedIndex === index ? "true" : "false"}
                  >
                    {expandedIndex === index ? "-" : "+"}
                  </button>
                </div>
                {expandedIndex === index && (
                  <p className="text-[12px]  font-serif sm:text-[14px] mt-2 ">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.6, 1.4)}
          className="w-[40%]  hidden sm:flex my-auto flex-col p-4 rounded-t-3xl bg-primary text-white gap-7"
        >
          <p>Have any queries?</p>
          <button
            onClick={() => navigate("/contactus")}
            className="rounded-3xl text-black py-3 w-[80%] mx-auto bg-white"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQs);
