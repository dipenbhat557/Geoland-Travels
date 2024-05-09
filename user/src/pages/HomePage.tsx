import { useEffect } from "react";
import Blogs from "../components/Blogs";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Gallery from "../components/Glimpse";
import Hero from "../components/Hero";
import InboundTour from "../components/InboundTour";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import OutboundTour from "../components/OutBoundTour";
// import ReachOut from "../components/ReachOut";
// import Reviews from "../components/Reviews";
import TrendingDest from "../components/TrendingDest";
import WhyTour from "../components/WhyTour";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar isHome={true} />
      <Hero />

      <TrendingDest />
      <WhyTour />
      <InboundTour />
      <Explore />
      <OutboundTour />
      {/* <Reviews /> */}

      <Blogs />
      <Message />
      <Gallery />
      {/* <ReachOut /> */}

      <Footer isContact={false} />
    </div>
  );
};
export default HomePage;
