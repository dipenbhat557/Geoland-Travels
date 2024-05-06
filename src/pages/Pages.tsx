import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./Details";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dest" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Pages;
