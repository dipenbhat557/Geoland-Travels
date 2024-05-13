import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styles } from "../styles";

const TermsAndConditions = () => {
  return (
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
          These conditions apply equally to all the passengers’ names mentioned
          in the booking. The passenger guarantee’s that he/she has the
          authority to accept and do accepts these terms and conditions on
          behalf of the passenger’s party.
        </p>
        <p className="mb-4">
          Geoland Travel reserves the full right to decline the booking at their
          will without any further explanation.
        </p>
        <h3 className="text-xl font-semibold mb-2">Name Change Amendment</h3>
        <p className="mb-4">
          Please note that the passenger must provide the full correct name as
          appeared on the passport at the time of booking. As the airlines won’t
          permit name changes on issued tickets Geoland Travel Agent will not
          take any responsibility for any charges that may occur in the
          submission of the incorrect names. We recommend you submit a passport
          copy at the time of booking.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Payment and Pricing Policy
        </h3>
        <p className="mb-4">
          The booking will be confirmed only after receiving full payment and
          once the written confirmation note is issued by Geoland Travel.
          Geoland Travel reserves the full right to cancel or make changes if
          required we will not be responsible for the difference in price due to
          different circumstances which are outside the control of Geoland
          Travel. We have full authority to increase the rates of booking in
          case of an increase in transportation cost charge is due, taxes or
          fees chargeable for service, an increase in hotel rate, or case of
          availability issues.
        </p>
        <p className="mb-4">
          The rates advertised here are subject to seasonal changes, and
          exchange rates and may vary slightly. Payment can be made via cash or
          bank transfer.
        </p>
        <h3 className="text-xl font-semibold mb-2">Tourism Dirham</h3>
        <p className="mb-4">
          Please note that as per the Dubai Government‘s council resolution No 2
          of 2014, all the hotels and resorts will apply the Tourism Dirham for
          all the hotel accommodations in Dubai. The Tourism Dirham will be
          applied and charged to guests at the time of check out by the hotel.
        </p>
        <h3 className="text-xl font-semibold mb-2">Green Tax Maldives</h3>
        <p className="mb-4">
          As per the new policy which was implemented by the Government of
          Maldives on 01 Oct 2016. The green tax must be paid by the passengers
          to the hotel directly upon checkout.
        </p>
        <h3 className="text-xl font-semibold mb-2">Cancellation by Clients</h3>
        <p className="mb-4">
          If the passenger wishes to cancel their booking, then they must inform
          us in writing to us in Advance signed by the lead passenger. We will
          only cancel the booking on the date the cancellation is requested in
          writing form or else the following cancellation charges will apply.
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
          The rate of Air Ticket and partially used services are non-refundable.
        </p>
        <h3 className="text-xl font-semibold mb-2">Amendments/charges</h3>
        <p className="mb-4">
          Any amendments or changes must be informed and confirmed 72 hours
          before departure or else it will be chargeable as per the
          availability. The request change is not guaranteed. In case of death,
          injury, or serious illness of the client or his family, or jury
          services the booking may be possible to transfer from another date or
          if the refund is payable by Geoland Travel to the client then the
          amount will be calculated as per the terms and condition as evidence
          of exceptional circumstances bank charge levied for processing the
          credited amount will not be paid by Geoland Travel. We have full right
          to substitute the hotel listed with others of a similar category. In
          case of flight cancellation, Geoland Travel has the full right to
          cancel the booking and refund the amount of the full package price to
          the passengers without paying any penalties to the customer.
        </p>
        <h3 className="text-xl font-semibold mb-2">Product Information</h3>
        <p className="mb-4">
          All the product information has been published by Geoland Travel in
          good faith and will use its best endeavors to operate all products. We
          reserve the right to change any of the facilities and services
          described in its website and publications and to substitute
          alternative arrangement of comparable monetary value without
          compensation and accepts no liability for loss.
        </p>
        {/* More sections can be added here */}
      </div>
      <Footer isContact={false} />
    </div>
  );
};
export default TermsAndConditions;
