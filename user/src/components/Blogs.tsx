import { useNavigate } from "react-router-dom";
import { blogItems } from "../constants";
import { styles } from "../styles";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className={`flex w-full ${styles.padding} h-[550px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%]`}>Blogs</p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {blogItems?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate("/blog", { state: { blog: item } })}
              className="w-[31%] cursor-pointer h-[90%] p-2 rounded-3xl justify-between flex flex-col"
            >
              <div className="w-full relative h-[75%] rounded-3xl">
                <img
                  src={item?.img}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <p className="bg-white px-2 py-1 absolute top-5 left-5 rounded-lg">
                  Trips
                </p>
              </div>
              <div className="flex gap-4 ">
                <p className="  flex items-center font-light text-[13px] ml-3">
                  {item?.date}
                </p>
                <p className=" flex items-center font-light text-[13px] ml-3">
                  By &nbsp; {item?.author}
                </p>
              </div>
              <p className="h-[15%]  font-semibold flex items-center line-clamp-2">
                {item?.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
