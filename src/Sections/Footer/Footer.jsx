import "./Footer.scss";
import houseIcon from "../../assets/house.svg";
import searchIcon from "../../assets/search.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container-icons">
        <img className="icon-item" src={houseIcon}></img>
        <img className="icon-item" src={searchIcon}></img>

        <div className="icon-item"></div>
      </div>
    </div>
  );
}
export default Footer;
