import Blogs from "../components/Blogs";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import InboundTour from "../components/InboundTour";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import OutboundTour from "../components/OutBoundTour";
import ReachOut from "../components/ReachOut";
import Reviews from "../components/Reviews";
import Trending from "../components/TopTrending";
import TrendingDest from "../components/TrendingDest";
import WhyTour from "../components/WhyTour";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Trending />
      <WhyTour />
      <TrendingDest />
      <Explore />
      <InboundTour />
      <Reviews />
      <OutboundTour />
      <Blogs />
      <Message />
      <Gallery />
      <ReachOut />
      <Footer />
    </div>
  );
};
export default HomePage;
