import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Netflix from "../../Assets/images/NetflixLogo1.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IonIcon } from "@ionic/react";

const Header = () => {
  const [show, handleShow] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   const toggleSearch = () => {
     setIsSearchOpen(!isSearchOpen);
   };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul className="nav_menu">
            <li>
              <img
                className="netflix-img"
                src={Netflix}
                alt="NetFlix-Logo"
                width={"100"}
              />
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/tvshows">TVShows</a>
            </li>
            <li>
              {" "}
              <a href="/movies">Movies</a>{" "}
            </li>
            <li>
              {" "}
              <a href="New and Popular">New & Popular</a>{" "}
            </li>
            <li>
              {" "}
              <a href="My List">My List</a>{" "}
            </li>
            <li>
              <a href="Browse by Languages">Browse by Languages</a> 
            </li>
          </ul>
        </div>

        <div className="header_right">
          <ul className="header_icons">
      <li>
        <span className={`search-box ${isSearchOpen ? 'active' : ''}`} onClick={toggleSearch}>
          <input type="text" placeholder="Titles, People, Genres..." />
          <IonIcon className="search-outline"></IonIcon>
          <SearchIcon/>
        </span>
      </li>

            <li>
              <a className="kids" href="https://www.netflix.com/Kids">
                Kids
              </a>
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
