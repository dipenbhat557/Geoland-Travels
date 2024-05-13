import { TourData } from "../store";
import { styles } from "../styles";

const WhatsIncluded = ({ tour }: { tour: TourData }) => {
  return (
    <div
      className={`${styles.padding} w-full border-b border-slate-200 h-auto flex gap-10`}
    >
      <div className="flex flex-col gap-3">
        <p className={`${styles.sectionHeadText}`}>What's Included</p>
        <ul className="list-disc flex flex-col gap-3">
          {tour?.inclusion?.map((tour, i) => {
            return (
              <li className="text-[13px] font-light" key={i}>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className={`${styles.sectionHeadText}`}>What's Not Included</p>
        <ul className="list-disc flex flex-col gap-3">
          {tour?.exclusion?.map((tour, i) => {
            return (
              <li className="text-[13px] font-light" key={i}>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default WhatsIncluded;
