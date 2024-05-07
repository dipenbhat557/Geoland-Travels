import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { Tour } from "./TourOverview";

const verticalStyle = {
  content: "''",
  position: "absolute",
  top: 0,
  left: "12px" /* Adjust as needed */,
  height: "100%",
  width: "2px" /* Adjust as needed */,
  backgroundColor: "#06905E" /* Adjust as needed */,
  borderRadius: "1px" /* Adjust as needed */,
  borderStyle: "dotted" /* Set the line to be dotted */,
};

const ItineraryCard = ({
  item,
  isFirst,
  isLast,
}: {
  item: string;
  isFirst: boolean;
  isLast: boolean;
  index: number;
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#ffffff", marginTop: "0px" }}
      iconStyle={{
        background: isFirst || isLast ? "#06905E" : "#ffffff",
        width: isFirst || isLast ? "30px" : "20px",
        height: isFirst || isLast ? "30px" : "20px",
        marginLeft: isFirst || isLast ? "0px" : "10px",
      }}
      className="h-auto p-0 m-0 text-[2px]"
    >
      <p className=" p-0 m-0">{item}</p>
    </VerticalTimelineElement>
  );
};

const Itinerary = ({ tour }: { tour: Tour }) => {
  return (
    <div className={`${styles.padding} w-[50%] h-auto flex flex-col gap-3`}>
      <p className={`${styles.sectionSubText}`}>Itinerary</p>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#06905E"
          className="custom-vertical-timeline m-0 p-0"
          layout="1-column-left"
        >
          {tour?.itinerary?.map((item, index) => (
            <ItineraryCard
              key={`item-${index}`}
              item={item}
              isFirst={index === 0}
              isLast={index === tour?.itinerary?.length - 1}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
      {/* Add the vertical line style */}
      <style>{`.custom-vertical-timeline::before { ${Object.entries(
        verticalStyle
      )
        .map(([prop, val]) => `${prop}: ${val};`)
        .join(" ")} }`}</style>
      <style>{`
        .vertical-timeline-element {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};
export default Itinerary;
