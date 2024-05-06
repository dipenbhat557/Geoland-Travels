import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { Tour } from "./TourOverview";

const ItineraryCard = ({ item }: { item: string }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#ffffff", color: "#06905E" }}
      contentArrowStyle={{ borderRight: "17px solid #06905E" }}
      iconStyle={{ background: "#06905E" }}
    >
      <p className="text-[12px]">{item}</p>
    </VerticalTimelineElement>
  );
};

const Itinerary = ({ tour }: { tour: Tour }) => {
  return (
    <div className={`${styles.padding} w-[50%] h-auto flex flex-col gap-3`}>
      <p className={`${styles.sectionSubText}`}>Itinerary</p>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#06905E">
          {tour?.itinerary?.map((item, index) => (
            <ItineraryCard key={`item-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Itinerary;
