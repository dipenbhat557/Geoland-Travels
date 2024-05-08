import { destinationDropdown, navLinks, tourDropdown } from "../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { logo } from "../assets";
import { styles } from "../styles";
const Navbar = ({ isHome }: { isHome: boolean }) => {
  const navigate = useNavigate();
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [toggle, setToggle] = useState(false);
  let timeoutId1: NodeJS.Timeout;
  let timeoutId2: NodeJS.Timeout;

  const handleMouseLeave1 = () => {
    timeoutId1 = setTimeout(() => {
      setShowDropdown1(false);
    }, 1000);
  };

  const handleMouseOverDropdown1 = () => {
    setShowDropdown1(true);
    if (timeoutId1) {
      clearTimeout(timeoutId1);
    }
  };

  const handleMouseLeave2 = () => {
    timeoutId2 = setTimeout(() => {
      setShowDropdown2(false);
    }, 1000);
  };

  const handleMouseOverDropdown2 = () => {
    setShowDropdown2(true);
    if (timeoutId2) {
      clearTimeout(timeoutId2);
    }
  };

  return (
    <>
      <div
        className={` bg-white bg-opacity-10 backdrop-blur-sm hover:backdrop-blur-lg	border-radius:0.5rem fixed w-full h-[60px] hidden sm:flex items-center  justify-around z-30`}
      >
        <div
          className="w-[20%] h-[90%] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        {!isHome && (
          <input
            type="text"
            className="w-[20%] p-1 px-3 text-[14px]  placeholder:text-slate-400 placeholder:text-[13px] placeholder:text-center rounded-lg border border-slate-200 focus:outline-none"
            placeholder="Search destination or activity"
          />
        )}
        <div className=" w-[55%] h-full items-center justify-end gap-2 flex">
          <div className="flex items-center  justify-around w-[80%]">
            {navLinks?.map((nav, index) => (
              <div
                key={index}
                className={` flex items-center text-[14px] gap-2 cursor-pointer relative`}
                onMouseEnter={() => {
                  if (nav.title === "Tours") {
                    setShowDropdown1(true);
                  } else if (nav.title === "Destination") {
                    setShowDropdown2(true);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.title === "Tours") {
                    handleMouseLeave1();
                  } else if (nav.title === "Destination") {
                    handleMouseLeave2();
                  }
                }}
                onClick={() => {
                  navigate(nav.link);
                }}
              >
                {nav.title === "Tours" || nav.title === "Destination" ? (
                  <>
                    {nav.title}
                    <IoMdArrowDropdown className={`inline  `} />
                  </>
                ) : (
                  <a className={`hover:text-[#06905E]`} href={nav?.link}>
                    {nav?.title}
                  </a>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/contactus")}
            className={`${styles.primaryBgColor} text-white w-[15%] py-2 rounded-3xl `}
          >
            Contact Us
          </button>
        </div>

        {showDropdown1 && (
          <div
            className="dropdown-menu top-14 p-3 rounded-b-xl rounded-r-xl left-[45%] shadow-md shadow-black text-black bg-white w-[16%] absolute z-50 "
            onMouseLeave={() => setShowDropdown1(false)}
            onMouseOver={() => handleMouseOverDropdown1()}
          >
            <ul className="w-full">
              {tourDropdown?.map((service, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-[#80b38930] px-2 py-1 rounded-sm text-[14px] cursor-pointer "
                  >
                    <p
                      onClick={() =>
                        navigate(service?.link, {
                          state: { title: service?.title },
                        })
                      }
                    >
                      {service?.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {showDropdown2 && (
          <div
            className="dropdown-menu top-14 p-3 rounded-b-xl rounded-r-xl left-[63%] shadow-md shadow-black text-black bg-white w-[16%] absolute z-50 "
            onMouseLeave={() => setShowDropdown2(false)}
            onMouseOver={() => handleMouseOverDropdown2()}
          >
            <ul className="w-full">
              {destinationDropdown?.map((service, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-[#80b38930]  px-2 py-1 rounded-sm text-[14px] cursor-pointer "
                  >
                    <p
                      onClick={() =>
                        navigate(service?.link, {
                          state: { title: service?.title },
                        })
                      }
                    >
                      {service?.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* Mobile menu */}
      <div
        className={`shadow-2xl shadow-slate-500 sm:hidden cursor-pointer z-40 flex items-center h-[70px] px-6 w-full mr-3 justify-between `}
      >
        <div className="w-[30%] cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        {toggle ? (
          <AiOutlineMenuUnfold
            className={`text-2xl `}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenuFold
            className={`text-2xl `}
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#ffffff] absolute top-14 right-3   min-w-[140px] z-50 rounded-xl rounded-tr-none flex flex-col items-end gap-4`}
        >
          <ImCross className="text-sm" onClick={() => setToggle(false)} />
          <li
            className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <a href="/" className="w-full text-left">
              Home
            </a>
          </li>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`font-poppins w-full text-[17px]   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {link.title === "Tours" ? (
                <a className="w-full text-left" href="#">
                  Tours
                </a>
              ) : link.title === "Destination" ? (
                <a className="w-full text-left" href="#">
                  Destination
                </a>
              ) : (
                <a className="w-full text-left" href={link?.link}>
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
