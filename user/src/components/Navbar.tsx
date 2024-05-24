import { aboutUsDropdown, navLinks, tourDropdown } from "../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { logo } from "../assets";
import { styles } from "../styles";
import { useRecoilValue } from "recoil";
import { TourData, toursData } from "../store";
const Navbar = ({ isHome }: { isHome: boolean }) => {
  const navigate = useNavigate();
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [toggle, setToggle] = useState(false);
  let timeoutId1: NodeJS.Timeout;
  let timeoutId2: NodeJS.Timeout;
  let timeoutId3: NodeJS.Timeout;
  const tours: TourData[] = useRecoilValue(toursData);
  const [packages, setPackages] = useState<TourData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchResult, setSearchResult] = useState<TourData[]>([]);

  const boxRef3 = useRef<HTMLDivElement>(null);

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

  const handleMouseLeave3 = () => {
    timeoutId3 = setTimeout(() => {
      setShowDropdown3(false);
    }, 1000);
  };

  const handleMouseOverDropdown3 = () => {
    setShowDropdown3(true);
    if (timeoutId3) {
      clearTimeout(timeoutId3);
    }
  };

  useEffect(() => {
    const packageResults = tours.filter((t: TourData) => t?.trending === true);
    setPackages(packageResults);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef3.current && !boxRef3.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    if (searchQuery.trim() !== "") {
      const searchResults = tours.filter((t: TourData) =>
        t?.tourTitle?.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
    }
    setClicked(true);
  };

  return (
    <>
      <div
        className={`${
          clicked ? "relative" : "fixed"
        } bg-white bg-opacity-10 backdrop-blur-sm hover:backdrop-blur-lg	border-radius:0.5rem  w-full h-[60px] hidden sm:flex items-center  justify-around z-30`}
      >
        <div
          className="w-[20%] h-[90%] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        {!isHome && (
          <input
            value={searchQuery}
            onChange={handleSearchInputChange}
            type="text"
            className="w-[20%] p-1 px-3 text-[14px]  placeholder:text-slate-400 placeholder:text-[13px] placeholder:text-center rounded-lg border border-slate-200 focus:outline-none"
            placeholder="Search destination or activity"
          />
        )}
        {clicked &&
          (searchResult?.length > 0 ? (
            <div
              ref={boxRef3}
              className="w-[25%] rounded-b-lg absolute z-40  left-[19%] top-[90%]  h-auto "
            >
              {searchResult?.map((s, i) => {
                return (
                  <div
                    key={i}
                    className={`w-full  cursor-pointer h-auto p-3 bg-slate-200 border-b border-slate-300 flex items-center justify-center ${
                      i === searchResult?.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    <p
                      onClick={() =>
                        navigate("/details", { state: { tour: s } })
                      }
                    >
                      {s?.tourTitle}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              ref={boxRef3}
              className="w-[25%] rounded-b-lg absolute z-20  left-[19%] top-[90%]  bg-slate-200   flex items-center justify-center  h-[50px] "
            >
              "No results found"
            </div>
          ))}
        <div className=" w-[55%] h-full items-center justify-end gap-2 flex">
          <div className="flex items-center  justify-around w-[80%]">
            {navLinks?.map((nav, index) => (
              <div
                key={index}
                className={` flex items-center text-[14px] gap-2 cursor-pointer relative`}
                onMouseEnter={() => {
                  if (nav.title === "Destination") {
                    setShowDropdown1(true);
                  } else if (nav.title === "Most Sold Packages") {
                    setShowDropdown2(true);
                  } else if (nav.title === "About Us") {
                    setShowDropdown3(true);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.title === "Destination") {
                    handleMouseLeave1();
                  } else if (nav.title === "Most Sold Packages") {
                    handleMouseLeave2();
                  } else if (nav.title === "About Us") {
                    handleMouseLeave3();
                  }
                }}
                onClick={() => {
                  navigate(nav.link);
                }}
              >
                {nav.title === "Destination" ||
                nav.title === "Most Sold Packages" ||
                nav.title === "About Us" ? (
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
                    onClick={() =>
                      navigate("/destination", {
                        state: { key: "type", val: service?.val },
                      })
                    }
                    key={index}
                    className="hover:bg-[#80b38930] px-2 py-1 rounded-sm text-[14px] cursor-pointer "
                  >
                    <p>{service?.title}</p>
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
              {packages?.map((service, index) => {
                return (
                  <li
                    onClick={() =>
                      navigate("/details", {
                        state: { tour: service },
                      })
                    }
                    key={index}
                    className="hover:bg-[#80b38930]  px-2 py-1 rounded-sm text-[14px] cursor-pointer "
                  >
                    <p>{service?.tourTitle}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}{" "}
        {showDropdown3 && (
          <div
            className="dropdown-menu top-14 p-3 rounded-b-xl rounded-r-xl left-[55%] shadow-md shadow-black text-black bg-white w-[16%] absolute z-50 "
            onMouseLeave={() => setShowDropdown3(false)}
            onMouseOver={() => handleMouseOverDropdown3()}
          >
            <ul className="w-full">
              {aboutUsDropdown?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-[#80b38930]  px-2 py-1 rounded-sm text-[14px] cursor-pointer "
                  >
                    <a href={item?.link}>{item?.title}</a>
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
              {link.title === "Destination" ? (
                <a className="w-full text-left" href="/destination">
                  Tours
                </a>
              ) : link.title === "Most Sold Packages" ? (
                <a className="w-full text-left" href="/#trending">
                  Most Sold Packages
                </a>
              ) : link.title === "About Us" ? (
                <a className="w-full text-left" href="/aboutus">
                  About Us
                </a>
              ) : (
                <a className="w-full text-left" href={link?.link}>
                  {link.title}
                </a>
              )}
            </li>
          ))}
          <li
            className={`font-poppins text-[17px] w-full   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <a href="/contactus" className="w-full text-left">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
