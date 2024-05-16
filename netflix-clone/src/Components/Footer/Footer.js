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
          <div className="footer_icons">
            <a className="footer_icon" href="https://www.facebook.com/netflix/">
              <FacebookIcon />
            </a>
            <a className="footer_icon" href="<InstagramIcon />">
              <InstagramIcon />
            </a>
            <a
              className="footer_icon"
              href="https://twitter.com/netflix/status/1623396371872243712?lang=en"
            >
              <TwitterIcon />
            </a>
            <a
              className="footer_icon"
              href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
            >
              <YouTubeIcon />
            </a>
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://www.netflix.com/browse/audio-description"
                  >
                    <span className="member-footer-link-content">
                      Audio Description
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://ir.netflix.net/ir-overview/profile/default.aspx"
                  >
                    <span className="member-footer-link-content">
                      Investor Relations
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/legal/privacy"
                  >
                    <span className="member-footer-link-content">Privacy</span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/en/contactus"
                  >
                    <span className="member-footer-link-content">
                      Contact Us
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/en/"
                  >
                    <span className="member-footer-link-content">
                      Help Center
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a className="footer_link" href="https://jobs.netflix.com/">
                    <span className="member-footer-link-content">Jobs</span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/legal/notices"
                  >
                    <span className="member-footer-link-content">
                      Legal Notice
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/legal/dnsspi"
                  >
                    <span className="member-footer-link-content">
                      Do Not Sell or Share My Personal Information
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://www.netflix.com/redeem"
                  >
                    <span className="member-footer-link-content">
                      Gift Cards
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a className="footer_link" href="https://www.netflix.shop/">
                    <span className="member-footer-link-content">
                      Netflix Shop
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://www.netflix.com/browse"
                  >
                    <span className="member-footer-link-content">
                      Cookie Preferences
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/legal/dnsspi#DAA"
                  >
                    <span className="member-footer-link-content">
                      Ad Choices
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://media.netflix.com/en/"
                  >
                    <span className="member-footer-link-content">
                      MediaCenter
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/legal/termsofuse"
                  >
                    <span className="member-footer-link-content">
                      Terms of Use
                    </span>
                  </a>
                </li>
                <li className="footer_link_wrapper">
                  <a
                    className="footer_link"
                    href="https://help.netflix.com/en/node/134094"
                  >
                    <span className="member-footer-link-content">
                      Corporate Information
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy-right"> &copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
