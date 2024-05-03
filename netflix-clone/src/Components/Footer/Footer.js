import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="                                                                                                                                                                                                                         ">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon/>
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Descrpition</li>
                <li> Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li> Jobs</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li> Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="service_code">
              <p>Service Code</p>
            </div>
            <div className="copy-right"> &copy; 1997-2024 Netflix, Inc.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;