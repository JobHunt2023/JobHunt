import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Job from "./pages/Job";


import { Home } from "./pages/Home";

import { NavBar } from "./components/uiPrmitives/NavBar";
import { Footer } from "./components/uiPrmitives/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { AboutUs } from "./pages/AboutUs";
import Connections from "./components/profilepage/Connections";
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { UseUser, UserProvider } from "./hooks/UserContext";
import { ProfilePageOne } from "./pages/ProfilePageOne";
import { GroupsAndCommunities } from "./pages/GroupsAndCommunities";
import NewsFeed from "./pages/NewsFeed";


const cookies = new Cookies();

axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('token')}`;

function App() {
  // const { user } = UseUser();


  return (
    <>
      {/* <UserProvider user={user}> */}
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/job" element={<Job />} />

            <Route path="/" element={<Home />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<Register />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            <Route path="/profilepage" element={<ProfilePageOne /> } />
            <Route path="/connections" element={<Connections />} />
            <Route path="/groups" element={<GroupsAndCommunities />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
