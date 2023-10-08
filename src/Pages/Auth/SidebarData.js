import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGamepad, faHouse, faPhone, faRightFromBracket, faUpload } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Game",
    path: "/game",
    icon: <FontAwesomeIcon icon={faGamepad} />,
    cName: "nav-text",
  },
  {
    title: "AddGame",
    path: "/addGameTable",
    icon: <FontAwesomeIcon icon={faUpload} />,
    cName: "nav-text",
  },
  {
    title: "ContactUsTable",
    path: "/contactUsTable",
    icon: <FontAwesomeIcon icon={faUpload} />,
    cName: "nav-text",
  },
  {
    title: "UserTable",
    path: "/userTable",
    icon: <FontAwesomeIcon icon={faUpload} />,
    cName: "nav-text",
  },
  {
    title: "AddGame",
    path: "/addGameTable",
    icon: <FontAwesomeIcon icon={faUpload} />,
    cName: "nav-text",
  },
  {
    title: "Membership",
    path: "/membership",
    icon: <FontAwesomeIcon icon={faAward} />,
    cName: "nav-text",
  },
  {
    title: "AboutUs",
    path: "/aboutUs",
    icon: <FontAwesomeIcon icon={faHouse} />,
    cName: "nav-text",
  },
  {
    title: "ContactUs",
    path: "/contactUs",
    icon: <FontAwesomeIcon icon={faPhone} />,
    cName: "nav-text",
  },
  {
    title: "LogOut",
    path: "/",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    cName: "nav-text",
  },
];


