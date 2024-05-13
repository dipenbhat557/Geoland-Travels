import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TourData } from "../store";
import { styles } from "../styles";

const verticalStyle = {
  content: "''",
  position: "absolute",
  top: 0,
  left: "16px",
  height: "100%",
  width: "2px",
  backgroundColor: "#06905E",
  borderRadius: "3px",
  borderStyle: "dashed",
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
}) => (
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

const Itirenary = ({ tour }: { tour: TourData }) => {
  return (
    <div
      className={`${styles.padding} w-full sm:w-[50%] h-auto flex flex-col gap-3`}
    >
      <p className={`${styles.sectionSubText}`}>Itinerary</p>
      <div className="mt-5 flex flex-col">
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

export default Itirenary;
