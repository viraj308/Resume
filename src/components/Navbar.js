import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";

import img from "../images/my-pic.jpg";

import "./navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="nav__flex">
            <a href="#" className="navbar__logo" onClick={closeMobileMenu}>
              VIRU
            </a>
            <div className="profile__img">
              <img className="img" src={img} />
            </div>
            <div className="menu__icon" onClick={handleClick}>
              {click ? <GiCancel /> : <GiHamburgerMenu />}
            </div>
            <ul className={click ? "nav__menu nav__menu--active" : "nav__menu"}>
              <li className="nav__item" onClick={closeMobileMenu}>
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item" onClick={closeMobileMenu}>
                <a href="#" className="nav__link">
                  Experience
                </a>
              </li>
              <li className="nav__item" onClick={closeMobileMenu}>
                <a href="#" className="nav__link">
                  Education
                </a>
              </li>
              <li className="nav__item" onClick={closeMobileMenu}>
                <a href="#" className="nav__link">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
