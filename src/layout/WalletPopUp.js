import { Fragment } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
const WalletPopUp = ({ walletToggle, wallet }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />
      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div className="title_holder">
            <h3>Connect Us Now</h3>
            <p>
              You can Connect with us using our Social Media
            </p>
          </div>
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a href="https://www.facebook.com/equilibrio.fest" />
                  <span className="icon">
                    <img src="/img/social/facebook.png" alt="" />
                  </span>
                  <span className="text">Facebook</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="https://www.youtube.com/@EquilibrioTechfestGGVBilaspur" />
                  <span className="icon">
                    <img src="/img/social/youtube.png" alt="" />
                  </span>
                  <span className="text">Youtube</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="https://www.linkedin.com/company/equilibrio-ggv/" />
                  <span className="icon">
                    <img src="/img/social/linkedin.png" alt="" />
                  </span>
                  <span className="text">Linkedin</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="mailto:solasta.ggv@gmail.com" />
                  <span className="icon">
                    <img src="/img/social/gmail.png" alt="" />
                  </span>
                  <span className="text">Email</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.site.wallet,
});

export default connect(mapStateToProps, { walletToggle })(WalletPopUp);
