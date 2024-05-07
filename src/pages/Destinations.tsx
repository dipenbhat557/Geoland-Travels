

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TravelDate from "../components/TravelDate";
import Calendar from "../components/calendar";
import { destinations_details } from "../constants";
import { tour_types } from "../constants"

const Destinations = () => {


  const [showpick, setshowpick] = useState(false)

  return (

    <div className="flex flex-col">

      <Navbar />

      <div className="mt-20 p-5 text-3xl tracking-tight">Explore all things to do in #Destination</div>


      <div className="flex ">
        <div className=" w-[25%] h-[25%] border bg-[rgb(6,144,94)]  rounded-t-lg p-8 m-2 text-white  ">
          When are You travelling?



          <input className=" rounded-lg m-2  " onClick={() => {
            setshowpick(!showpick)
          }} />

          {showpick ? <div className=""> <Calendar /></div> : ""}


          <h6 className="py-5">Tour Type</h6>



          <ul >
            {
              tour_types.map((item, index) => (
                <li>
                  <div className="flex items-center mb-4">
                    <input key={index} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100  rounded-lg   focus:outline-none" />
                    <label form="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-200">{item}</label>
                  </div>
                </li>
              ))
            }



          </ul>

        </div>

        <div className="w-[70%] pl-8 pt-6">
          {destinations_details.map((item, index) => (
            <TravelDate key={index}
              img={item.img}
              location={item.location}
              title={item.title}
              rating={item.rating}
              noOfResponse={item.noOfResponse}

              description={item.description}
              note={item.note}
              time={item.time}
              old_price={parseFloat(item.old_price)}
              price={parseFloat(item.price)} />
          ))}
        </div>


      </div>
      <Footer />

    </div>
  );
};
export default Destinations;
