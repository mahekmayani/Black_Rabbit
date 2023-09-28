import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Pages/Auth/Navbar';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration';
import AddGame from './Pages/Auth/AddGame';
import AboutUs from './Pages/Auth/AboutUs';
import ContactUs from './Pages/Auth/ContactUs';
import Forgot from './Pages/Auth/Forgot';
import Game from './Pages/Auth/Game';
import Membership from './Pages/Auth/Membership';
import Sidebar from './Pages/Auth/Sidebar';
import Navbar from './Pages/Auth/Navbar';

function App() {
  const getPath = (window.location.pathname);
  // console.log("get",get);
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/addGame" element={<AddGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>
    </>
  );
}

export default App;