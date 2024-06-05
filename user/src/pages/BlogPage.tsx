import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import Gallery from "../components/Glimpse";
import Footer from "../components/Footer";
import { def, heroBg } from "../assets";
import { Suspense, useEffect, useState } from "react";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loading from "../components/Loading";

interface BlogData {
  title: string;
  role: string;
  blogTitle: string;
  content: string;
  author: string;
  date: string;
  img: string;
  id: string;
  description: string;
}

const BlogPage = ({ isFromNavbar }: { isFromNavbar: boolean }) => {
  const location = useLocation();
  const blog = location?.state?.blog;
  const navigate = useNavigate();
  const [blogItems, setBlogItems] = useState<BlogData[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  useEffect(() => {
    const gotBlogs: BlogData[] = [];
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.date;
        let dateObject = "";

        if (date instanceof Timestamp) {
          dateObject = date.toDate().toString().slice(0, 21);
          console.log("Date:", dateObject);
        } else {
          console.error("Invalid or missing date field:", date);
        }

        const b: BlogData = {
          title: doc?.data()?.title,
          date: dateObject,
          img: doc?.data()?.img,
          id: doc?.id,
          role: doc?.data()?.role,
          blogTitle: doc?.data()?.blogTitle,
          content: doc?.data()?.content,
          author: doc?.data()?.author,
          description: doc?.data()?.description,
        };
        gotBlogs.push(b);
      });
      setBlogItems(gotBlogs);
    };

    fetchDocuments();
  }, []);

  const addTailwindClasses = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    doc
      .querySelectorAll("h1")
      .forEach((el) => el.classList.add("text-4xl", "font-bold", "my-4"));
    doc
      .querySelectorAll("h2")
      .forEach((el) => el.classList.add("text-3xl", "font-bold", "my-4"));
    doc
      .querySelectorAll("h3")
      .forEach((el) => el.classList.add("text-2xl", "font-bold", "my-4"));
    doc
      .querySelectorAll("h4")
      .forEach((el) => el.classList.add("text-xl", "font-bold", "my-4"));
    doc
      .querySelectorAll("p")
      .forEach((el) => el.classList.add("text-base", "my-2"));
    doc
      .querySelectorAll("strong")
      .forEach((el) => el.classList.add("font-semibold"));
    doc
      .querySelectorAll("ul")
      .forEach((el) => el.classList.add("list-disc", "ml-4"));
    doc
      .querySelectorAll("ol")
      .forEach((el) => el.classList.add("list-decimal", "ml-4"));
    doc.querySelectorAll("u").forEach((el) => el.classList.add("underline"));

    // Adjust image styling
    if (window.innerWidth < 640) {
      doc.querySelectorAll("img").forEach((el) => {
        el.classList.add("w-full", "h-[300px]", "my-4");
      });
    } else {
      doc.querySelectorAll("img").forEach((el) => {
        el.classList.add("w-full", "h-[450px]", "my-4");
      });
    }

    return doc.body.innerHTML;
  };

  const styledContent = blog?.content ? addTailwindClasses(blog.content) : "";
  const styledDescription = blog?.description
    ? addTailwindClasses(blog.description)
    : "";

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-3 w-full items-center">
        <Navbar isHome={true} />
        <div
          className={`flex gap-4 h-[500px] sm:h-[650px] w-full flex-col sm:mt-24 rounded-3xl ${styles.paddingX} `}
        >
          {!isFromNavbar ? (
            <div className="w-full h-[80%]">
              <img
                src={blog?.img || def}
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
            className={` ${styles.primaryBgColor} w-[28%] sm:w-[7%] h-[7%] sm:h-auto sm:py-2 text-white rounded-3xl`}
          >
            Trips
          </button>
          {!isFromNavbar && (
            <div className="w-full">
              <div className="flex gap-3 h-auto font-light text-[12px] ">
                <p>By {blog?.author}</p>
                <div className="border-l border-slate-500" />
                <p>5 min read</p>
              </div>
              <p className="font-light text-[12px]">{blog?.date}</p>
            </div>
          )}
        </div>
        {!isFromNavbar && (
          <div className={`${styles.padding} w-[80%] flex flex-col gap-2`}>
            <p className={`text-[25px] sm:text-[39px] font-bold`}>
              {blog?.blogTitle}
            </p>
            <div
              className="text-[14px] text-slate-700"
              dangerouslySetInnerHTML={{ __html: styledDescription }}
            ></div>
            <div
              className="text-[14px] text-slate-700"
              dangerouslySetInnerHTML={{ __html: styledContent }}
            ></div>
            <div
              className={`${styles.paddingY} w-full flex items-center justify-center`}
            >
              <button
                onClick={() => navigate("/")}
                className={`${styles.primaryBgColor} text-white w-[50%] sm:w-[15%] py-2 rounded-lg mx-auto`}
              >
                Back to Home Page
              </button>
            </div>
          </div>
        )}
        <div
          className={`${styles.paddingX} w-[90%] sm:w-full  flex flex-col gap-3`}
        >
          <p className={`${styles.sectionHeadText}`}>
            {isFromNavbar ? "Blogs" : "More like this"}
          </p>
          <div className="w-full h-auto flex-wrap flex justify-between  items-center">
            {blogItems?.length > 0 ? (
              blogItems?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => navigate("/blog", { state: { blog: item } })}
                    className="w-[90%] sm:w-[31%] cursor-pointer h-full p-2 rounded-3xl gap-3 flex flex-col"
                  >
                    <div className="w-full relative h-[200px] sm:h-[300px] rounded-3xl">
                      <img
                        src={item?.img || def}
                        alt="trending"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <p className="bg-white px-2 sm:py-1 absolute top-5 left-5 rounded-lg">
                        Trips
                      </p>
                    </div>
                    <div className="flex justify-between px-1 sm:px-3">
                      <p className="  flex items-center font-light text-[10px] sm:text-[13px] ml-3">
                        {item?.date}
                      </p>
                    </div>
                    <p className="text-[12px] sm:text-[16px]  font-semibold flex items-center truncate">
                      {item?.blogTitle}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className="text-[10px] h-[150px] sm:h-[150px]  overflow-y-scroll sm:text-[14px] flex items-center line-clamp-2"
                    ></p>
                  </div>
                );
              })
            ) : (
              <>
                <p className="w-full text-center font-semibold text-[22px]">
                  Please wait while fetching data....{" "}
                </p>
                <Loading />
              </>
            )}
          </div>
        </div>
        <Gallery />
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default BlogPage;
