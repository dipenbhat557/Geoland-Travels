import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { blogItems } from "../constants";
import Gallery from "../components/Glimpse";
import Footer from "../components/Footer";
import { heroBg } from "../assets";
import { useEffect } from "react";

const BlogPage = ({ isFromNavbar }: { isFromNavbar: boolean }) => {
  const location = useLocation();
  const blog = location?.state?.blog;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <Navbar isHome={true} />
      <div
        className={`flex gap-4  h-[650px] w-full flex-col  mt-24 rounded-3xl ${styles.paddingX} `}
      >
        {!isFromNavbar ? (
          <div className="w-full h-[80%]">
            <img
              src={blog?.img}
              alt="blog"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-[80%]">
            <img
              src={heroBg}
              alt="blog"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        )}
        <button
          onClick={() => navigate("/destination")}
          className={` ${styles.primaryBgColor} w-[7%] py-2 text-white rounded-3xl`}
        >
          Trips
        </button>
        {!isFromNavbar && (
          <>
            <div className="flex gap-3 h-auto font-light text-[12px] ">
              <p>{blog?.author}</p>
              <div className="border-l border-slate-500" />
              <p>{blog?.post}</p>
              <div className="border-l border-slate-500" />
              <p>5 min read</p>
            </div>
            <p className="font-light text-[12px]">{blog?.date}</p>
          </>
        )}
      </div>
      {!isFromNavbar && (
        <div className={`${styles.padding} flex flex-col gap-2`}>
          <p className={`${styles.sectionSubText}`}>{blog?.title}</p>
          <p className="text-[14px] text-slate-700">{blog?.content}</p>
          <div
            className={`${styles.paddingY} w-full flex items-center justify-center`}
          >
            <button
              className={`${styles.primaryBgColor} text-white w-[15%] py-2 rounded-lg mx-auto`}
            >
              Back to Home Page
            </button>
          </div>
        </div>
      )}
      <div className={`${styles.paddingX} flex flex-col gap-3`}>
        <p className={`${styles.sectionHeadText}`}>
          {isFromNavbar ? "Blogs" : "More like this"}
        </p>
        <div className="w-full h-[500px] flex justify-between items-center">
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
                  <p className="  flex items-center font-light text-[13px] ml-3">
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
      <Gallery />
      <Footer isContact={false} />
    </div>
  );
};
export default BlogPage;
