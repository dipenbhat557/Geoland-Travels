import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { def } from "../assets";

export interface BlogData {
  title: string;
  role: string;
  blogTitle: string;
  content: string;
  author: string;
  date: string;
  img: string;
  id: string;
}

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    let gotBlogs: BlogData[] = [];
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
        };
        gotBlogs.push(b);
      });
      gotBlogs = gotBlogs?.length > 3 ? gotBlogs?.slice(0, 3) : gotBlogs;
      setBlogs(gotBlogs);
    };

    fetchDocuments();
  }, []);

  return (
    <div className={`flex w-full ${styles.padding} h-[550px] flex flex-col`}>
      <p className={`${styles.sectionHeadText} h-[10%]`}>Blogs</p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {blogs?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate("/blog", { state: { blog: item } })}
              className="w-[31%] cursor-pointer h-[90%] p-2 rounded-3xl justify-between flex flex-col"
            >
              <div className="w-full relative h-[75%] rounded-3xl">
                <img
                  src={item?.img || def}
                  alt="trending"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <p className="bg-white px-2 py-1 absolute top-5 left-5 rounded-lg">
                  Trips
                </p>
              </div>
              <div className="flex justify-between px-3">
                <p className="  flex items-center font-light text-[13px] ml-3">
                  {item?.date}
                </p>
                <p className=" flex items-center font-light text-[13px] ml-3">
                  By &nbsp; {item?.author}
                </p>
              </div>
              <p className="h-[15%]  font-semibold flex items-center line-clamp-1">
                {item?.blogTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
