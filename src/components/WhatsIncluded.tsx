import { styles } from "../styles";
import { Tour } from "./TourOverview";

const WhatsIncluded = ({ tour }: { tour: Tour }) => {
  return (
    <div
      className={`${styles.padding} w-full border-b border-slate-200 h-auto flex gap-10`}
    >
      <div className="flex flex-col gap-3">
        <p className={`${styles.sectionSubText}`}>What's Included</p>
        <ul className="list-disc flex flex-col gap-3">
          {tour?.included?.map((tour, i) => {
            return (
              <li className="text-[13px] font-light" key={i}>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className={`${styles.sectionSubText}`}>What's Not Included</p>
        <ul className="list-disc flex flex-col gap-3">
          {tour?.excluded?.map((tour, i) => {
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
