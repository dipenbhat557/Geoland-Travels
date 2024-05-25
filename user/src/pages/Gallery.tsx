import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { img1, img3, img4, img5, img6, img7 } from "../assets";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface ImageData {
  img: string;
  category: string;
  date: string;
}

interface FolderWithImage {
  category: string;
  images: ImageData[];
}

interface FolderData {
  title: string;
  category: string;
  date: string;
}

const Gallery = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const navigate = useNavigate();
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [folderWithImages, setFolderWithImages] = useState<FolderWithImage[]>(
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % 5);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const gotFolders: FolderData[] = [];
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "imageFolders"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        let dateObject = "";

        if (data.date instanceof Timestamp) {
          dateObject = data.date.toDate().toString().slice(0, 21);
        } else {
          console.error("Invalid or missing date field:", data.date);
        }

        const f: FolderData = {
          title: data.title,
          category: data.category,
          date: dateObject,
        };
        gotFolders.push(f);
      });
      setFolders(gotFolders);
    };

    let gotImages: ImageData[] = [];
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const dateString =
          data.date instanceof Timestamp
            ? data.date.toDate().toString().slice(0, 21)
            : data.date;
        const f: ImageData = {
          img: data.img,
          category: data.category,
          date: dateString,
        };
        gotImages.push(f);
      });

      const newFolders: FolderWithImage[] = [];

      folders.forEach((folder: FolderData) => {
        const folderImages = gotImages.filter(
          (i) =>
            i.category.toLowerCase().trim() ===
            folder.category.toLowerCase().trim()
        );
        const f = { category: folder.category, images: folderImages };
        newFolders.push(f);
      });

      setFolderWithImages(newFolders);
      console.log("folder with images are ", folderWithImages);
    };

    fetchDocuments();
    fetchImages();
  }, [folders]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col sm:gap-5 h-auto">
        <Navbar isHome={true} />
        <div className="h-[500px] sm:h-[580px] flex justify-center items-end w-full relative sm:mt-14">
          <div className="w-full h-full absolute -z-10">
            {[img1, img3, img4, img5, img6, img7].map((element, index) => (
              <div
                key={index}
                className={`absolute w-full h-full ${
                  index === currentElement ? "visible" : "hidden"
                }`}
              >
                <img
                  src={element}
                  alt="Background Photo"
                  className={`photo-slide w-full h-full photo-element ${
                    index === currentElement
                      ? "photo-fade-in"
                      : "photo-fade-out"
                  }`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="w-full h-full bg-black opacity-40 absolute z-10" />
          <div className="w-[70%] sm:w-[50%] h-[15%] flex flex-col  z-20">
            <div className="w-full flex items-center justify-center h-[70%] bg-primary text-white font-semibold text-[20px] sm:text-[25px]">
              Gallery
            </div>
            <div className="w-full h-[30%] bg-white" />
          </div>
        </div>
        <div
          className={`${styles.padding} flex flex-wrap justify-center gap-4 sm:justify-between  h-auto w-full`}
        >
          {folderWithImages.map((folder: FolderWithImage, index: number) => {
            return (
              <div
                onClick={() =>
                  navigate("/images", { state: { folder: folder } })
                }
                key={index}
                className="h-[400px] cursor-pointer w-[80%] sm:w-[40%] flex flex-col p-5 border border-slate-400 rounded-2xl justify-between"
              >
                <div className="w-full h-[70%] relative">
                  {folder.images.slice(0, 3).map((image, i) => (
                    <img
                      key={i}
                      className={`absolute w-full h-full object-cover  `}
                      src={image.img}
                      alt={`img-${index}-${i}`}
                      style={{
                        height: `${80 + 3 * i}%`,
                        width: `${80 + 3 * i}%`,
                        top: `${i * 5}%`,
                        left: `${i * 5}%`,
                        zIndex: -i,
                        transform: `rotate(${i * 5}deg)`,
                        border: "1px solid #fff",
                      }}
                    />
                  ))}
                </div>
                <div className="w-full flex justify-between text-[10px]">
                  {folder.images[0]?.date}
                </div>
                <p className="text-[22px] font-semibold">{folder.category}</p>
              </div>
            );
          })}
        </div>
        <Faq />
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};

export default Gallery;
