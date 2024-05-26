import { Suspense, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import Loading from "../components/Loading";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-4">
        <Navbar isHome={true} />
        <div className={`${styles.padding} mt-14`}>
          <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
          <h3 className="text-xl font-semibold mb-2">Contract and Booking</h3>
          <p className="mb-4">
            A passenger refers to all the persons named on the booking who wants
            to Travel with us and the term the company “we” or “us” refers to
            Geoland Travel. All clients must have read, understood, and accepted
            all the conditions applied by us. The booking will be confirmed once
            the full payment is received. The contact between Geoland Travel and
            the passenger will exist once it is confirmed in writing. Once the
            contract is made the client is dully bound by law and Geoland.
          </p>
          <p className="mb-4">
            These conditions apply equally to all the passengers’ names
            mentioned in the booking. The passenger guarantee’s that he/she has
            the authority to accept and do accepts these terms and conditions on
            behalf of the passenger’s party.
          </p>
          <p className="mb-4">
            Geoland Travel reserves the full right to decline the booking at
            their will without any further explanation.
          </p>
          <h3 className="text-xl font-semibold mb-2">Name Change Amendment</h3>
          <p className="mb-4">
            Please note that the passenger must provide the full correct name as
            appeared on the passport at the time of booking. As the airlines
            won’t permit name changes on issued tickets Geoland Travel Agent
            will not take any responsibility for any charges that may occur in
            the submission of the incorrect names. We recommend you submit a
            passport copy at the time of booking.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Payment and Pricing Policy
          </h3>
          <p className="mb-4">
            The booking will be confirmed only after receiving full payment and
            once the written confirmation note is issued by Geoland Travel.
            Geoland Travel reserves the full right to cancel or make changes if
            required we will not be responsible for the difference in price due
            to different circumstances which are outside the control of Geoland
            Travel. We have full authority to increase the rates of booking in
            case of an increase in transportation cost charge is due, taxes or
            fees chargeable for service, an increase in hotel rate, or case of
            availability issues.
          </p>
          <p className="mb-4">
            The rates advertised here are subject to seasonal changes, and
            exchange rates and may vary slightly. Payment can be made via cash
            or bank transfer.
          </p>
          <h3 className="text-xl font-semibold mb-2">Tourism Dirham</h3>
          <p className="mb-4">
            Please note that as per the Dubai Government‘s council resolution No
            2 of 2014, all the hotels and resorts will apply the Tourism Dirham
            for all the hotel accommodations in Dubai. The Tourism Dirham will
            be applied and charged to guests at the time of check out by the
            hotel.
          </p>
          <h3 className="text-xl font-semibold mb-2">Green Tax Maldives</h3>
          <p className="mb-4">
            As per the new policy which was implemented by the Government of
            Maldives on 01 Oct 2016. The green tax must be paid by the
            passengers to the hotel directly upon checkout.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Cancellation by Clients
          </h3>
          <p className="mb-4">
            If the passenger wishes to cancel their booking, then they must
            inform us in writing to us in Advance signed by the lead passenger.
            We will only cancel the booking on the date the cancellation is
            requested in writing form or else the following cancellation charges
            will apply.
          </p>
          <table className="w-full mb-4">
            <tr className="border-b">
              <td className="py-2 pr-2">Before Departure</td>
              <td className="py-2 pr-2">Percentage of cancellation</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2">Up to 8 days</td>
              <td className="py-2 pr-2">150 USD per person</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2">7 to 3 days (72 hours)</td>
              <td className="py-2 pr-2">50 %</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2">Less than 72 hours</td>
              <td className="py-2 pr-2">100%</td>
            </tr>
          </table>
          <p className="mb-4">
            The rate of Air Ticket and partially used services are
            non-refundable.
          </p>
          <h3 className="text-xl font-semibold mb-2">Amendments/charges</h3>
          <p className="mb-4">
            Any amendments or changes must be informed and confirmed 72 hours
            before departure or else it will be chargeable as per the
            availability. The request change is not guaranteed. In case of
            death, injury, or serious illness of the client or his family, or
            jury services the booking may be possible to transfer from another
            date or if the refund is payable by Geoland Travel to the client
            then the amount will be calculated as per the terms and condition as
            evidence of exceptional circumstances bank charge levied for
            processing the credited amount will not be paid by Geoland Travel.
            We have full right to substitute the hotel listed with others of a
            similar category. In case of flight cancellation, Geoland Travel has
            the full right to cancel the booking and refund the amount of the
            full package price to the passengers without paying any penalties to
            the customer.
          </p>
          <h3 className="text-xl font-semibold mb-2">Product Information</h3>
          <p className="mb-4">
            All the product information has been published by Geoland Travel in
            good faith and will use its best endeavors to operate all products.
            We reserve the right to change any of the facilities and services
            described in its website and publications and to substitute
            alternative arrangement of comparable monetary value without
            compensation and accepts no liability for loss.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Inclusions and Exclusions
            </h2>
            <p>
              The price of any standard package includes only the items
              specified. It does not include items of a personal nature like
              personal insurance, transportation services beyond those mentioned
              in the itinerary, refreshments, telephone calls, laundry, tips,
              meals and beverages unless specified, optional excursions, visa
              fees, gratuities, or taxes. Usage of any above-mentioned
              exclusions must be borne by the passenger from his expenses. The
              passengers must read all the inclusions and exclusions mentioned
              in the itinerary carefully at the time of booking.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Travel Insurance</h2>
            <p>
              Travel insurance must be done to travel to most countries to cover
              at least emergency medical and repatriation expenses. The policy
              applies to all passengers aged less than 65 years at the date of
              policy was issued. Geoland Travel does not hold any responsibility
              for any injuries and damage caused to the passenger from the time
              of booking for the full duration of the tour. If a passenger
              wishes to add their additional insurance, then they will be
              responsible for an additional cost.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Liability</h2>
            <p>
              Geoland Travel doesn’t hold liability for loss, damage, delay,
              accident, injury, or any other irregularity arising at the time of
              the tour. Geoland Travel only acts as The Tour Operator on behalf
              of the supplier and the airlines. Geoland Travel does not have
              direct control over the service and facilities provided by the
              suppliers thus Geoland Travel will not be held responsible for
              errors or omission made by the supplier. Geoland Travel will not
              take responsibility for the additional charges levied for delay,
              accident, or disruption of the products beyond control.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Delay</h2>
            <p>
              Geoland Travel will not take any responsibility for any delays
              before departure or during travel occurred due to airline
              technical issues, weather conditions, strikes, or any other
              circumstances out of control. Expenses related to these extensions
              will be bear by the passenger himself.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Travel Documentation</h2>
            <p>
              It is the responsibility of the passenger to obtain all the
              necessary documents, passports, visa permits, vaccination, and
              medicines certificates that may be needed to travel. It is the
              duty of the passenger to check all the details provided on the
              travel documents are correct upon receipt. Please contact Geoland
              Travel immediately in case of any mistakes. The passenger will be
              held responsible for ensuring they have provided correct and
              necessary documentation before the departure date.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Health and Conduct</h2>
            <p>
              All the passengers must make sure that they are fit and in
              condition to travel before departure. Any kind of pre-existing
              medical conditions or illness must be informed at the time of
              booking and make arrangements for any medication or other kind of
              treatment which may be required during the tour. In the case of a
              passenger, ill health Geoland Travel may make arrangements as
              required and recover the cost from the passenger. Failure to
              inform Geoland Travel at the time of booking will constitute a
              breach of these booking conditions and relieve Geoland Travel from
              any obligation and liability.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Local Law and Client Exclusion
            </h2>
            <p>
              All the passengers must accept the law and order of the authority
              and decisions of Geoland Travel and its suppliers and
              representative on tour. Geoland Travel shall not be responsible
              for any passenger who commits an illegal or unlawful act while on
              the tour.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Force Majeure and Extraordinary Events
            </h2>
            <p>
              Geoland Travel has full right to cancel the booking in case of
              unusual circumstances like war, the threat of war, civil strike,
              riot, terrorist activity, industrial dispute, nuclear disaster,
              fire, pandemic, epidemic, weather conditions, flight cancellation,
              or any other extra circumstances beyond the control of Geoland
              Travel. If after the announcement of any above-mentioned event, it
              will take a maximum of 12 months to process the refund. If the
              flights get canceled after booking has been confirmed due to the
              above-mentioned reasons, then passengers will get refunded up to
              60% of the unused service only after confirmation from the
              airlines, hotels, and other service providers. The cancellation
              process will take up to 12 months. The refund will be given to the
              passengers only after Geoland Travel receives the amount from the
              suppliers. However, the passenger can request to transfer the
              existing booking to be rescheduled for the future.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Complaints</h2>
            <p>
              If you have any complaints regarding the service provided by
              Geoland Travel, a complaint must be done immediately. Geoland
              Travel will try every effort to resolve the problem to meet
              passenger satisfaction. If the passenger fails to complain
              immediately Geoland Travel will not be held responsible or at
              least reduce liability to pay the compensation. Also, Geoland
              Travel will not be able to rectify any problem if it is unaware
              of.
            </p>
          </section>
        </div>
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default TermsAndConditions;
