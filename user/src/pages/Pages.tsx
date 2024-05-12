import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./Details";
import BlogPage from "./BlogPage";
import ContactUs from "./ContactUs";
import Destinations from "./Destinations";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/blogs" element={<BlogPage isFromNavbar={true} />} />
        <Route path="/blog" element={<BlogPage isFromNavbar={false} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
