import { Suspense, lazy, useEffect } from "react";
import Faq from "../components/Faq";
import Loading from "../components/Loading";
import Review from "../components/Reviews";
import { useRecoilValue } from "recoil";
import { heroIndex } from "../store";

const Navbar = lazy(() => import("../components/Navbar"));
const Blogs = lazy(() => import("../components/Blogs"));
const Explore = lazy(() => import("../components/Explore"));
const Footer = lazy(() => import("../components/Footer"));
const Gallery = lazy(() => import("../components/Glimpse"));
const Hero1 = lazy(() => import("../components/Hero1"));
const Hero2 = lazy(() => import("../components/Hero2"));
const InboundTour = lazy(() => import("../components/InboundTour"));
const Message = lazy(() => import("../components/Message"));
const OutboundTour = lazy(() => import("../components/OutBoundTour"));
const TrendingDest = lazy(() => import("../components/TrendingDest"));
const WhyTour = lazy(() => import("../components/WhyTour"));
const Reviews = lazy(() => import("../components/Reviews"));

const HomePage = () => {
  const hero = useRecoilValue(heroIndex);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <Navbar isHome={true} />
        {hero === 0 ? <Hero1 /> : <Hero2 />}

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
        <Review />
        <Footer isContact={false} />
      </div>
    </Suspense>
  );
};
export default HomePage;
