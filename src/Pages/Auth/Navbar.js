import { useNavigate } from "react-router-dom";
import '../Auth/Css/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Navbar() {

    const navigate = useNavigate();
    const userName = localStorage.getItem("userName")

  

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
