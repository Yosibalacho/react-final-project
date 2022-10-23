import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import ContactUs from "./components/pages/contact-us/ContactUs";
import Courses from "./components/pages/Courses/Courses";
import Home from "./components/pages/home/Home";
import Teachers from "./components/pages/teachers/Teachers";

function RouterScreen() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/Teachers" element={<Teachers/>} />
    </Routes>
  );
}

export default RouterScreen;