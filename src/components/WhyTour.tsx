import { whyTourItems } from "../constants";
import { styles } from "../styles";

const WhyTour = () => {
  return (
    <div className={`${styles.padding} w-full h-[500px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%] text-center`}>
        Why Choose Tour?
      </p>
      <div className="w-full h-[80%] flex justify-between items-center">
        {whyTourItems?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[23%] h-[90%] p-2 rounded-3xl gap-2 flex flex-col"
            >
              <div className="w-full h-[45%] flex items-end justify-center">
                <img
                  src={item?.img}
                  alt="trending"
                  className="w-[20%] h-[50%] object-contain "
                />
              </div>
              <p className=" font-semibold text-center flex justify-center tracking-wider line-clamp-2">
                {item?.title}
              </p>
              <div className=" text-[14px]  line-clamp-5 leading-loose tracking-wide overflow-y-hidden text-center  text-slate-600">
                <p>{item?.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WhyTour;
