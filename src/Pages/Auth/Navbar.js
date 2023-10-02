import { useNavigate } from "react-router-dom";
import '../Auth/Css/Navbar.css';


function Navbar() {

    const navigate = useNavigate();

  

    const ProfileClick = () => {
        navigate("/profile");
    }
  return (
    <>
      <div className='navbar-form'>
        <p className="ml-auto" onClick={ProfileClick}>Profile</p>     
     </div>
    </>
  );
}

export default Navbar;
