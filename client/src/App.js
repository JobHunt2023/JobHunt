import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/uiPrmitives/NavBar";
import { Footer } from "./components/uiPrmitives/Footer";
import { AboutUs } from "./pages/AboutUs";
import Connections from "./components/profilepage/Connections";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/connections" element={<Connections />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
