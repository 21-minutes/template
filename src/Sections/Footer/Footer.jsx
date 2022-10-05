import "./Footer.scss";
import houseIcon from "../../assets/house.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container-icons">
        <img className="icon-item" src={houseIcon}></img>
        <div className="icon-item"></div>
        <div className="icon-item"></div>
      </div>
    </div>
  );
}
export default Footer;
