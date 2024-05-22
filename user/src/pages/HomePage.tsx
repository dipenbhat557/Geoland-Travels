import { Suspense, lazy, useEffect } from "react";
import Faq from "../components/Faq";
import Loading from "../components/Loading";

const Navbar = lazy(() => import("../components/Navbar"));
const Blogs = lazy(() => import("../components/Blogs"));
const Explore = lazy(() => import("../components/Explore"));
const Footer = lazy(() => import("../components/Footer"));
const Gallery = lazy(() => import("../components/Glimpse"));
const Hero = lazy(() => import("../components/Hero"));
const InboundTour = lazy(() => import("../components/InboundTour"));
const Message = lazy(() => import("../components/Message"));
const OutboundTour = lazy(() => import("../components/OutBoundTour"));
const TrendingDest = lazy(() => import("../components/TrendingDest"));
const WhyTour = lazy(() => import("../components/WhyTour"));
const Reviews = lazy(() => import("../components/Reviews"));

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <Navbar isHome={true} />
        <Hero />

        <TrendingDest />
        <WhyTour />
        <InboundTour />
        <Explore />
        <OutboundTour />
        <Reviews />

        <Blogs />
        <Message />
        <Gallery />
        {/* <ReachOut /> */}
        <Faq />

        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default HomePage;
