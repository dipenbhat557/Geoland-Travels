import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Footer from "../components/Footer";
import { styles } from "../styles";

const Images = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const folder = location?.state?.folder;
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col sm:gap-5 h-auto">
        <Navbar isHome={true} />
        <div
          onClick={() => navigate("gallery")}
          className="sm:mt-14 px-6 flex gap-4"
        >
          <MdArrowBack className="text-[30px] " />
          <p className="text-[22px] font-semibold">{folder?.category}</p>
        </div>

        <div
          className={`${styles?.padding} flex flex-wrap gap-4 justify-between`}
        >
          {folder?.images?.map((image: string, index: number) => {
            return (
              <div key={index} className="w-[30%] h-auto">
                <img
                  src={image}
                  className="w-full h-auto object-cover"
                  alt={`img-${index}`}
                />
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center">
          <button className="text-white font-semibold text-[18px] bg-primary py-2 w-[20%]">
            Back to Home Page
          </button>
        </div>
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default Images;
