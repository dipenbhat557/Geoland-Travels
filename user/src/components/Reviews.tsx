import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

interface ReviewData {
  title: string;
  designation: string;
  content: string;
  author: string;
  date: string;
  img: string;
}

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    let gotReviews: ReviewData[] = [];
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.date;
        let dateObject = "";

        if (date instanceof Timestamp) {
          dateObject = date.toDate().toString().slice(0, 21);
        } else {
          console.error("Invalid or missing date field:", date);
        }

        const r: ReviewData = {
          title: doc?.data()?.reviewTitle,
          date: dateObject?.slice(0, 16),
          img: doc?.data()?.img,
          designation: doc?.data()?.designation,
          content: doc?.data()?.content,
          author: doc?.data()?.name,
        };
        gotReviews.push(r);
      });
      gotReviews =
        gotReviews?.length > 6 ? gotReviews?.slice(0, 3) : gotReviews;
      gotReviews =
        window.innerWidth < 640 ? gotReviews?.slice(0, 2) : gotReviews;
      setReviews(gotReviews);
    };

    fetchDocuments();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-[400px] flex justify-around items-center flex-col">
      <p className={`${styles.sectionHeadText}`}>Customer Reviews</p>
      <div className="flex items-center justify-around w-[95%] sm:w-[80%] h-[90%] ">
        <div className="w-[25%] h-[80%] flex-col hidden  sm:flex justify-around">
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviews?.[0]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(0)}
            />
          </div>
          <div className="w-full flex justify-start h-[20%] ">
            <img
              src={reviews?.[1]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(1)}
            />
          </div>
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviews?.[2]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(2)}
            />
          </div>
        </div>
        <MdArrowLeft
          className="text-[45px] sm:hidden"
          onClick={() => setCurrentIndex(Math.min(currentIndex - 1, 0))}
        />
        <div className="w-[80%] sm:w-[30%] h-[80%] flex flex-col justify-between items-center">
          <div className="w-[20%] h-[24%] rounded-full">
            <img
              src={reviews?.[currentIndex]?.img}
              alt="review"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className={`${styles?.primaryTextColor} text-[14px] font-light `}>
            {reviews?.[currentIndex]?.title}
          </p>
          <p className={` text-[14px]  text-center`}>
            {reviews?.[currentIndex]?.content}
          </p>
          <p className={`text-[14px] font-light `}>
            {reviews?.[currentIndex]?.author}
          </p>
          <p className={` text-[14px] font-light `}>
            {reviews?.[currentIndex]?.designation}
          </p>
        </div>
        <MdArrowRight
          className="text-[45px] sm:hidden"
          onClick={() =>
            setCurrentIndex(Math.min(currentIndex + 1, reviews?.length - 1))
          }
        />
        <div className="w-[25%] h-[80%] flex-col hidden  sm:flex justify-around">
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviews?.[3]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(3)}
            />
          </div>
          <div className="w-full flex justify-start h-[20%]  ">
            <img
              src={reviews?.[4]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(4)}
            />
          </div>
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviews?.[5]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentIndex(5)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
