import logo from "./logo.svg";
import "./App.css";
import RouterScreen from "./Router";
import { BrowserRouter } from "react-router-dom";
import NavbarScroll from "./components/features/navbar/NavbarScroll";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarScroll/>
        <RouterScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
