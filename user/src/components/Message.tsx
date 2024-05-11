import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { def } from "../assets";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Message = () => {
  const [message, setMessage] = useState({
    name: "",
    message: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    img: "",
  });

  useEffect(() => {
    const docRef = doc(db, "messages", "QrQ6SBmLF4SCtlmI5dnB");
    const fetcthing = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setMessage({
          name: docSnap?.data()?.name,
          message: docSnap?.data()?.message,
          facebook: docSnap?.data()?.facebook,
          instagram: docSnap?.data()?.instagram,
          linkedin: docSnap?.data()?.linkedin,
          img: docSnap?.data()?.img,
        });
      } else {
        console.log("No such document!");
      }
    };
    fetcthing();
  }, []);
  return (
    <div
      className={`${styles.padding} bg-[#F9F9F6] w-full h-[650px] flex justify-center items-center`}
    >
      <div className="w-[95%] h-[95%] shadow-md shadow-slate-400 justify-between rounded-lg flex ">
        <div className="w-[45%] h-full rounded-l-lg">
          <img
            src={message?.img || def}
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
            {message?.message}
          </p>
          <p className="w-full text-right text-slate-600">-{message?.name}</p>
          <div className="w-[60%] h-[15%] flex items-center justify-around">
            <FaFacebook
              onClick={() => window.open(message?.facebook, "_blank")}
              className="cursor-pointer text-3xl text-blue-600"
            />
            <FaLinkedin
              onClick={() => window.open(message?.linkedin, "_blank")}
              className="cursor-pointer text-3xl text-blue-600"
            />
            <FaInstagram
              onClick={() => window.open(message?.instagram, "_blank")}
              className="cursor-pointer text-3xl text-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
