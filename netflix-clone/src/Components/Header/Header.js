import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import Netflix from "../../Assets/images/NetflixLogo1.png"

const Header = () => {
  return (
    <div className="header_outer_container">
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
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul className="header_icons">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <CastConnectedIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
