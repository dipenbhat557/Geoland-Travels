import React, { useState } from "react";
// import { reviewItems } from "../constants";
import { reviewItems } from "../constants";
import { styles } from "../styles";

const Review: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(reviewItems[0]);

  return (
    <div className="h-[400px] flex justify-around items-center flex-col">
      <p className={`${styles.sectionHeadText}`}>Customer Reviews</p>
      <div className="flex items-center justify-around w-[80%] h-[90%] ">
        <div className="w-[25%] h-[80%] flex-col flex justify-around">
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviewItems?.[0]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[0])}
            />
          </div>
          <div className="w-full flex justify-start h-[20%] ">
            <img
              src={reviewItems?.[1]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[1])}
            />
          </div>
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviewItems?.[2]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[2])}
            />
          </div>
        </div>
        <div className="w-[30%] h-[80%] flex flex-col justify-between items-center">
          <div className="w-[20%] h-[24%] rounded-full">
            <img
              src={currentReview?.img}
              alt="review"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className={`${styles?.primaryTextColor} text-[14px] font-light `}>
            {currentReview?.title}
          </p>
          <p className={` text-[14px]  text-center`}>
            {currentReview?.content}
          </p>
          <p className={`text-[14px] font-light `}>{currentReview?.name}</p>
          <p className={` text-[14px] font-light `}>Traveller</p>
        </div>
        <div className="w-[25%] h-[80%] flex-col flex justify-around">
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviewItems?.[3]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[3])}
            />
          </div>
          <div className="w-full flex justify-start h-[20%]  ">
            <img
              src={reviewItems?.[4]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[4])}
            />
          </div>
          <div className="w-full flex justify-end h-[20%] ">
            <img
              src={reviewItems?.[5]?.img}
              alt="review"
              className="w-[20%] h-full object-cover rounded-full  opacity-50 cursor-pointer"
              onClick={() => setCurrentReview(reviewItems?.[5])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <Html>
//           <ReviewSection />
//         </Html>
//       </Canvas>
//     </div>
//   );
// };

// export default App;
