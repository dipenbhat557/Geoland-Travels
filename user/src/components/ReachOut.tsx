// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { MdCall, MdLocationPin, MdMail } from "react-icons/md";
// import { textVariant } from "../utils/motion";
// import { useNavigate } from "react-router-dom";

// interface LocationType {
//   flag: string;
//   title: string;
//   phone: string;
//   mail: string;
//   address: string;
//   iconBg: string;
// }

// const LocationCard = ({ location }: { location: LocationType }) => {
//   const navigate = useNavigate();

//   return (
//     <VerticalTimelineElement
//       contentStyle={{ background: "#ffffff", color: "#06905E" }}
//       contentArrowStyle={{ borderRight: "17px solid #06905E" }}
//       iconStyle={{ background: "#06905E" }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={location.flag}
//             alt="location"
//             className="w-[60%] rounded-full h-[60%] object-cover"
//           />
//         </div>
//       }
//     >
//       <div
//         onClick={() => navigate("/contactus")}
//         className="shadow-slate-200 cursor-pointer shadow-md p-3 text-black border border-slate-200 rounded-lg"
//       >
//         <p className="text-[16px] font-semibold">{location.title}</p>
//         <div className="flex gap-3 items-center">
//           <MdLocationPin className={`${styles.primaryTextColor}`} />
//           <p>{location?.address}</p>
//         </div>
//         <div className="flex gap-3 items-center">
//           <MdCall className={`${styles.primaryTextColor}`} />
//           <p>{location?.phone}</p>
//         </div>
//         <div className="flex gap-3 items-center">
//           <MdMail className={`${styles.primaryTextColor}`} />
//           <p>{location?.mail}</p>
//         </div>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

// const ReachOut = () => {
//   return (
//     <div className={`${styles.padding}`}>
//       <motion.div variants={textVariant(0.2)}>
//         <h2 className={styles.sectionHeadText}>Reach Us At</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline lineColor="#06905E">
//           {/* {locationItems.map((location: LocationType, index: number) => (
//             <LocationCard key={`location-${index}`} location={location} />
//           ))} */}
//         </VerticalTimeline>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(ReachOut);
