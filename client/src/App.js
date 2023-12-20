import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { NavBar } from "./components/uiPrmitives/NavBar";
import { Footer } from "./components/uiPrmitives/Footer";
import NewsFeed from "./pages/NewsFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
