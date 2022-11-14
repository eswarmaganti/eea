import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowRightToBracket,
  faPhone,
  faChurch,
  faImage,
  faCalendarDay,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const NavbarLinks = [
  {
    link: "/",
    linkText: "Home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    link: "/worship-services",
    linkText: "Worship Services",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
  {
    link: "/events",
    linkText: "events",
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
  },
  {
    link: "/contact",
    linkText: "Contact",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    link: "/gallary",
    linkText: "Gallary",
    icon: <FontAwesomeIcon icon={faImage} />,
  },
  {
    link: "/login",
    linkText: "Login",
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <FontAwesomeIcon size="xl" icon={faChurch} className="text-rose-600" />
        <div>
          <h1 className="logo-head">Emmanuel</h1>
          <h2 className="text-sm font-semibold leading-none">
            Evangilical Association
          </h2>
        </div>
      </div>
      <ul className="navbar-nav">
        {NavbarLinks.map((item) => (
          <NavbarLink item={item} key={item.linkText} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const NavbarLink = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "link active-link" : "link unactive-link"
      }
      to={item.link}
    >
      <li>
        {item.icon}
        <span className="capitalize">{item.linkText}</span>
      </li>
    </NavLink>
  );
};
