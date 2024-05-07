import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./Details";
import BlogPage from "./BlogPage";
import ContactUs from "./ContactUs";
import Destinations from "./Destinations";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
