import { styles } from "../styles";

const DetailReviews = () => {
  return (
    <div className={`${styles.padding} flex flex-col gap-3`}>
      <p className={`${styles.sectionSubText}`}>Reviews</p>
      <div className="w-[70%] h-auto flex gap-1 flex-col">
        <div
          className={`${styles.paddingX} py-2 rounded-t-lg   bg-[#06905E30] flex justify-between`}
        >
          <div className="flex  font-light text-[12px] flex-col gap-1">
            <p>Overall Rating</p>
            <p>Excellent</p>
          </div>
          <p>5.0</p>
        </div>
        <div className="w-full h-auto flex justify-between ">
          <div
            className={`${styles.paddingX} py-2 w-[49.8%] bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Location Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.location}.0</p> */}
          </div>
          <div
            className={`${styles.paddingX} py-2 w-[49.8%]  bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Price Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.price}.0</p> */}
          </div>
        </div>
        <div className="w-full h-auto flex justify-between ">
          <div
            className={`${styles.paddingX} py-2 w-[49.8%] bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Food Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.food}.0</p> */}
          </div>
          <div
            className={`${styles.paddingX} py-2 w-[49.8%]  bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Security Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.security}.0</p> */}
          </div>
        </div>

        <div className="w-full h-auto flex justify-between ">
          <div
            className={`${styles.paddingX} py-2 w-[49.8%] bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Rooms Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.rooms}.0</p> */}
          </div>
          <div
            className={`${styles.paddingX} py-2 w-[49.8%]  bg-[#06905E0F] flex justify-between`}
          >
            <div className="flex font-light text-[12px] flex-col gap-1">
              <p>Tour Operator Rating</p>
              <p>Excellent</p>
            </div>
            {/* <p>{tour?.review?.tourOperator}.0</p> */}
          </div>
        </div>
        <button
          className={`${styles?.primaryBgColor} mt-4 mx-auto w-[20%] rounded-lg text-white py-2 px-4`}
        >
          Leave a Review
        </button>
      </div>
    </div>
  );
};
export default DetailReviews;
