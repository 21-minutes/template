import "./Footer.scss";
import houseIcon from "../../assets/house.svg";
import searchIcon from "../../assets/search.svg";
import { Navigate } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container-icons">
        <a href="/">
          <img className="icon-item" src={houseIcon}></img>
        </a>

        <img className="icon-item" src={searchIcon}></img>

        <div className="icon-item"></div>
      </div>
    </div>
  );
}
export default Footer;
