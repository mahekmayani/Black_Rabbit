import { useNavigate } from "react-router-dom";
import '../Auth/Css/Navbar.css';


function Navbar() {

    const navigate = useNavigate();

    const LogOutClick = () => {
        navigate("/");
    }
  return (
    <>
      <div className='navbar-form'>
        <p onClick={LogOutClick}>Log Out</p>     
     </div>
    </>
  );
}

export default Navbar;
