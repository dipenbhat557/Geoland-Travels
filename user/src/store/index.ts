import { atom, selector } from "recoil";
import { db } from "../firebaseConfig"; // Import your Firebase configuration
import { getDocs, collection, Timestamp } from "firebase/firestore"; // Import necessary Firestore functions

export interface TourData {
  title: string;
  img: string[];
  tourTitle: string;
  location: string;
  overview: string;
  highlights: string[];
  inclusion: string[];
  exclusion: string[];
  itinerary: { title: string; description: string }[];
  price: number;
  date: string;
  type: string;
  trending: boolean;
  category: string[];
  duration: string;
  groupSize: string;
  ages: string;
  languages: string;
}

export const heroIndex = atom({ key: "heroIndex", default: 0 });

export const toursData = selector({
  key: "toursData",
  get: async () => {
    try {
      const gotTours: TourData[] = [];
      const querySnapshot = await getDocs(collection(db, "tours"));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.date;
        let dateObject = "";

        if (date instanceof Timestamp) {
          dateObject = date.toDate().toString().slice(0, 21);
        } else {
          console.error("Invalid or missing date field:", date);
        }

        const t: TourData = {
          title: data.title,
          date: dateObject,
          img: data.img,
          tourTitle: data.tourTitle,
          location: data.location,
          overview: data.overview,
          highlights: data.highlights,
          inclusion: data.inclusion,
          exclusion: data.exclusion,
          itinerary: data.itinerary,
          price: data.price,
          type: data.type,
          trending: data.trending,
          category: data.category,

          duration: data.duration,
          groupSize: data.groupSize,
          ages: data.ages,
          languages: data.languages,
        };
        gotTours.push(t);
      });

      return gotTours;
    } catch (error) {
      console.error("Error fetching tours:", error);
      return [];
    }
  },
});
