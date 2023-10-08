import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './Pages/Auth/Navbar';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration';
import AddGame from './Pages/Auth/AddGame';
import AboutUs from './Pages/Auth/AboutUs';
import ContactUs from './Pages/Auth/ContactUs';
import Forgot from './Pages/Auth/Forgot';
import Membership from './Pages/Auth/Membership';
import Sidebar from './Pages/Auth/Sidebar';
import Navbar from './Pages/Auth/Navbar';
import Profile from './Pages/Auth/Profile';
import AddGameTable from './Pages/Auth/AddGameTable';
import Footer from './Pages/Auth/Footer';
import Game from './Pages/Auth/Game';
import GameDetails from './Pages/Auth/GameDetails';
import ContactUsTable from './Pages/Auth/ContactUsTable';
import UserTable from './Pages/Auth/UserTable';

function App() {
  const getPath = (window.location.pathname);
  const location = useLocation();

  console.log(location);

  const sideBarShowPath = ['/','/registration','/forgot']
  
  // console.log("get",get);
  return (
    <>

    {
      !sideBarShowPath.includes(location.pathname) && (
        <>
        <Navbar />
        <Sidebar />
        </>
      )
    }
     

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/addGame" element={<AddGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addgametable" element={<AddGameTable />} />
        {/* <Route path="/card" element={<Card />} /> */}
        <Route path="/gameDetails" element={<GameDetails />} />
        <Route path="/contactUsTable" element={<ContactUsTable />} />
        <Route path="/userTable" element={<UserTable />} />
        
      </Routes>
    </>
  );
}

export default App;
