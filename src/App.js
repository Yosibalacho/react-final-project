import logo from "./logo.svg";
import "./App.css";
import RouterScreen from "./Router";
import { BrowserRouter } from "react-router-dom";
import NavbarScroll from "./components/features/navbar/NavbarScroll";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/features/footer/Footer";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <NavbarScroll />
            <RouterScreen />
          </UserContext.Provider>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
