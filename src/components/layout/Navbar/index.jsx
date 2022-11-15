import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
    isScrollLink: true,
    target: "homepage",
  },
  {
    link: "/worship-services",
    linkText: "Worship Services",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
    isScrollLink: true,
    target: "worship-services",
  },
  {
    link: "/events",
    linkText: "events",
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
    isScrollLink: true,
    target: "events",
  },
  {
    link: "/contact",
    linkText: "Contact",
    icon: <FontAwesomeIcon icon={faPhone} />,
    isScrollLink: true,
    target: "contact",
  },
  {
    link: "/gallary",
    linkText: "Gallary",
    icon: <FontAwesomeIcon icon={faImage} />,
    isScrollLink: false,
  },
  {
    link: "/login",
    linkText: "Login",
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
    isScrollLink: false,
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
    <>
      {item.isScrollLink ? (
        <ScrollLink
          className="link "
          spy={true}
          hashSpy={true}
          duration={500}
          to={item.target}
          smooth={true}
          offset={-100}
          activeClass="active-link"
        >
          <li>
            {item.icon}
            <span className="capitalize">{item.linkText}</span>
          </li>
        </ScrollLink>
      ) : (
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
      )}
    </>
  );
};
