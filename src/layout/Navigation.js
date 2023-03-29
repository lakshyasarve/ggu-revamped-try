import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
                    href="mailto:solasta.ggv@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/social/gmail.png" alt="" />
                  </span>
                  <span className="text">Email Us Now</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("home");
                  }}
                  className={`${subMenu == "home" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Home
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link href="/">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Privacy Policy</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Terms & Conditions</span>
                      </a>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <Link href="/nft/1">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Events</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2023 - Designed &amp; Developed by{" "}
                <a
                  href="https://themeforest.net/user/codeefly/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GGU Technical
                </a>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="https://twitter.com/equilibrioggv">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/equilibrio.fest">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/equilibrio-ggv/">
                    <img
                      src="/svg/social/linkedin-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@EquilibrioTechfestGGVBilaspur">
                    <img
                      src="/svg/social/youtube-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
