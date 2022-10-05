import "./ContentHeader.scss";
import linkedinIcon from "../../assets/linkedin.svg";
import linkIcon from "../../assets/link.svg";
import instagramIcon from "../../assets/instagram.svg";
import avatar from "../../assets/people/janis_ringli.jpg";

function ContentHeader(props) {
  return (
    <div className="content-header__container">
      <div className="author-section">
        <img className="author-image" src={avatar}></img>
        <div className="container__author">
          <div className="author-name">{props.name}</div>
          <div className="author-info">
            <div className="info-date">{props.date}</div>
            <div className="dot"></div>
            <div className="info-reading-time">{props.readingTime} read</div>
          </div>
        </div>
      </div>
      <div className="author-socials">
        <div className="socials-item">
          <img className="item-icon" src={linkedinIcon}></img>
          <img className="item-icon" src={linkIcon}></img>
          <img className="item-icon" src={instagramIcon}></img>
          <div className="item-icon"></div>
        </div>
      </div>
    </div>
  );
}
export default ContentHeader;
