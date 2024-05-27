import { Suspense, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col sm:gap-5 h-auto">
        <Navbar isHome={true} />
        <div
          onClick={() => navigate("/gallery")}
          className="cursor-pointer sm:mt-14 mt-18 px-6 flex gap-4"
        >
          <MdArrowBack className="text-[30px] " />
          <p className="text-[22px] font-semibold">{folder?.category}</p>
        </div>

        <div
          className={`${styles?.padding} flex flex-wrap gap-4 justify-between`}
        >
          {folder?.images?.map((image: any, index: number) => {
            return (
              <div
                key={index}
                className="w-[45%] rounded-2xl sm:w-[24%] h-[250px]"
              >
                <img
                  src={image?.img}
                  className="w-full h-full rounded-2xl object-cover"
                  alt={`img-${index}`}
                />
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center my-3">
          <button className="text-white font-semibold text-[18px] bg-primary py-2 w-[50%] sm:w-[20%]">
            Back to Home Page
          </button>
        </div>
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default Images;
