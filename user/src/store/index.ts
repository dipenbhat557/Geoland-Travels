import { selector } from "recoil";
import { db } from "../firebaseConfig"; // Import your Firebase configuration
import { getDocs, collection, Timestamp } from "firebase/firestore"; // Import necessary Firestore functions

export interface TourData {
  title: string;
  date: string;
  img: string;
  id: string;
  tourTitle: string;
  location: string;
  overview: string;
  highlights: string[];
  inclusion: string[];
  exclusion: string[];
  itinerary: string[];
  price: number;
  type: string;
  trending: boolean;
  category: string[];
}

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
          id: doc.id,
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
