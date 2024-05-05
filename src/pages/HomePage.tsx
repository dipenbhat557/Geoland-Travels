import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
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
    </div>
  );
};
export default HomePage;
