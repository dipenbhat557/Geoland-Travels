import { Suspense, useEffect } from "react";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { styles } from "../styles";

const TravelTips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-4">
        <Navbar isHome={true} />
        <div className={`${styles.padding} mt-14`}>
          <h2 className="text-3xl font-bold mb-4">Travel Tips</h2>
          <p className="mb-4">
            Here you’ll find loads of useful info to help get you prepared
            before setting off on your trip.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Start with your holiday package
          </h3>
          <p className="mb-4">
            Start with your holiday package by choosing a guided tour package.
            It’s the best way to travel with family because all the details are
            pre-planned for you. This is especially important if you are not
            keen on researching destinations yourself.
          </p>
          <p className="mb-4">
            For those who do pre-plan, take some time to create a complete
            itinerary following some research on the destination you are
            visiting. Pay special attention to special festivals, weather, and
            political climate when you are working on the itinerary. This
            provides space for backup plans in case of unforeseen travel
            problems.
          </p>
          <p className="mb-4">
            The itinerary also ensures that everything is planned based on what
            you/ your family wants to see and experience. Just make sure all the
            activities are something worth trying and gives you and your fellow
            travellers a new dimension of the places visited.
          </p>
          <p className="mb-4">
            If you are travelling on a budget then you should plan with flight,
            ground arrangements, passport, visa, meals, transport, shopping and
            contingency cash for emergency.
          </p>
          <h3 className="text-xl font-semibold mb-2">Prep Work for Travel</h3>
          <p className="mb-4">
            Make sure you apply for vacation days which include a day’s rest
            after your return to cope with fatigue or jet lag if you’re flying.
            Furthermore ensure all your travel documents are confirmed 3-4
            working days before the travel date to ensure any last minute
            changes can still be accommodated.
          </p>
          <p className="mb-4">
            As for packing, it is essential to pack what you need with
            consideration for the shopping you plan to do at your holiday
            destination. If you’re travelling with family and kids, ensure the
            needs of the elders and children are itemized and packed to avoid
            discomfort or tantrums.
          </p>
          <p className="mb-4">
            Most importantly, it is vital to inform your close relatives/
            friends of your travel. It would be good to arrange for house/ pet
            sitting while you’re away. Lastly, call your bank and let them know
            that you are travelling and there will be large amount of purchases
            with the debit or credit card.
          </p>
          <h3 className="text-xl font-semibold mb-2">Medical Requirements</h3>
          <p className="mb-4">
            You should be up to date on routine vaccinations while travelling to
            any destination. Some vaccines may also be required for travel.
            These vaccines include measles-mumps-rubella (MMR) vaccine,
            diphtheria-tetanus-pertussis vaccine, varicella (chickenpox)
            vaccine, polio vaccine, and your yearly flu shot. Latest updates on
            vaccinations can be obtained from your local clinic or hospital.
          </p>
          <h3 className="text-xl font-semibold mb-2">Visa Requirement</h3>
          <p className="mb-4">
            Please take note that visa requirements for certain countries may
            change from time to time. It is advisable that you check with your
            travel agent or directly with destination country’s Embassy or High
            Commission in Malaysia before booking a holiday.
          </p>
          <h3 className="text-xl font-semibold mb-2">Travel Day</h3>
          <p className="mb-4">
            On your travel day, make a list of the things that you need to bring
            along- luggage, passport and tickets. Also, mark all your bags
            inside and out with your name and address – both home address and
            your holiday address. To be on the safe side, weigh your bags to
            ensure you don’t exceed the baggage requirements of the airline.
            Travel insurance is becoming a must, so do consider getting one
            because you do not have to worry if your bags are lost or if your
            flight has been cancelled or even if your passport and wallet is
            stolen. It is always best to get yourself and your family covered as
            mishaps do happen when travelling.
          </p>
          <p className="mb-4">
            You do know that it is possible to travel with hand-luggage only,
            right? Just that you will need to know the airline rules for
            carrying liquids, otherwise you may have to remove them at the
            security checkpoint! In order to handle jet lags, stay hydrated by
            drinking lots of plain water during the flight. Avoid tea and
            coffee.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Flight/Airport Reminders
          </h3>
          <p className="mb-4">
            Gather required documents before your flight as you are responsible
            to present as required, documents by the relevant authorities at all
            entry and exit lanes, health and other documents required by law,
            regulations, order, demands or requirements of the countries flown
            from, into or over.
          </p>
          <p className="mb-4">
            Self-check-in is free, simple & quick! It will save your time at
            airport! Otherwise, counter check-in opens 3 hours before the
            scheduled time of departure and closes 1 hour before the scheduled
            time of departure. Note: Check-in deadlines may vary at different
            airports and for particular flights. Airport has long queues due to
            complex security checks. We suggest that you check-in early and
            proceed immediately to the departure gate or you may risk being left
            behind in security.
          </p>
          <p className="mb-4">
            Pre-book your checked baggage to save money and time. Each
            piece/item of checked baggage has to weigh less than 30kg. Guests
            may not combine their checked baggage weight with other guests
            unless travelling in the same booking.
          </p>
          <p className="mb-4">
            For baggage drop counter, it opens 3 hours before the scheduled time
            of departure and closes 45 minutes before the scheduled time of
            departure. Guests are required to hold a boarding pass to use our
            baggage drop counters.
          </p>
          <p className="mb-4">
            Bringing liquids are subject to the prevalent applicable local laws
            and regulations guests may take liquids on board in their cabin
            baggage with a maximum volume of 100 ml. The items must be placed in
            a transparent, re-sealable plastic bag.
          </p>
          <p className="mb-4">
            For boarding time, guests are required to be at the boarding gate at
            least 20 minutes before the scheduled time of departure or you will
            be denied boarding.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Self-Drive Travel Reminders
          </h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Ensure you have a reliable GPS system and location maps in the
              car. Sometimes, you can’t rely totally on GPS and the local
              location maps come in handy.
            </li>
            <li>
              Pack enough liquids/water and snacks in the car as some stretches
              are long and do not have halfway stops.
            </li>
            <li>
              Try to reach your destination before dark as most stretches are
              either forests or farms where street lights are minimal in the
              countryside.
            </li>
            <li>
              Plan some games, pack short story books or sing along rhymes if
              you travel with kids.
            </li>
            <li>
              Umbrellas are great in case there are light drizzles or rain.
            </li>
            <li>
              Always ensure your tank is full and refill before it reaches
              quarter tank as it is not easy to find another petrol station
              nearby. You never know if you have gotten on the wrong track/trail
              or got lost.
            </li>
            <li>Buy insurance coverage for the driver and passengers.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">On Holiday</h3>
          <p className="mb-4">
            When you are overseas/ holiday destination, do call your close
            relatives/ friends to let them know you have arrived safely and keep
            them updated of where you are if you are moving around. Make sure to
            always keep your luggage locked when leaving them behind in the
            hotel. Carry your passport with you and ensure you don’t carry
            excessive cash that might attract attention. If you are taking a
            self drive holiday, make sure you collect the car from the airport
            and get a GPS.
          </p>
          <p className="mb-4">
            When you are abroad and if you want to try something local, make
            sure it is a recommendation from a trustworthy source. To make life
            easier, get a local map and identify the tourist info centres.
            Moreover for safety precautions, avoid walking alone at night or in
            dark areas and beware of pickpockets whose modus operandi is by
            distracting you. Also, if you drive, follow the local traffic rules
            and avoid driving at night.
          </p>
          <p className="mb-4">
            Before your return flight, do confirm your flight details in case of
            delays or cancellations. It is best to ensure that you have all
            travel documents prepared and easily accessible for check in. Always
            plan your packing and don’t do too much last minute shopping that
            can’t fit your luggage. Keep track with the luggage requirements of
            the country you’re visiting in mind.
          </p>
          <p className="mb-4">
            Do not forget to remind your close relatives/ friends of your return
            and make arrangements for an airport pick up. Keep track of all your
            valuables and make sure that they are in your hand- wallet,
            passport, camera, watch, jewelry.
          </p>
          <p className="mb-4">
            Last but not least, make sure you are at the airport two hours (or
            3-4 hours in some countries) earlier to avoid missing the flight.
          </p>
        </div>
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default TravelTips;
