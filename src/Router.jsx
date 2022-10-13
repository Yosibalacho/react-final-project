import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Cards from "./components/pages/cards/Cards";
import ContactUs from "./components/pages/contact-us/ContactUs";
import Home from "./components/pages/home/Homes";

function RouterScreen() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
  );
}

export default RouterScreen;