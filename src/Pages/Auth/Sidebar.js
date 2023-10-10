import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../Auth/Css/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  const getToken = localStorage.getItem("token");
  // const role = localStorage.getItem("role");

  const handleSideBarChange = (data) =>{
    if(data == "LogOut"){
      localStorage.removeItem("token")
      localStorage.removeItem("userName")
      localStorage.removeItem("role")
    }
  }
  const role = localStorage.getItem("role");
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FontAwesomeIcon icon={faBars} beatFade onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FontAwesomeIcon icon={faXmark} />
              </Link>
            </li>

            {SidebarData?.filter((item)=> role !== "admin" ? (item?.title !== "AddGame" && item?.title !== "UserTable" && item?.title !== "ContactUsTable"): item) ?.map((item, index) => {
              return (
                <li key={index} className={item.cName}
                  onClick={(e) => handleSideBarChange(item?.title)}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span
                      style={{
                        marginLeft: "8px"
                      }}
                    >{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
