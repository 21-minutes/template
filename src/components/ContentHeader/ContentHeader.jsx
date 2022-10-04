import "./ContentHeader.scss";

function ContentHeader(props) {
  return (
    <div className="content-header__container">
      <div className="author-section">
        <div className="author-image"></div>
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
          <div className="item-icon"></div>
          <div className="item-icon"></div>
          <div className="item-icon"></div>
          <div className="item-icon"></div>
        </div>
      </div>
    </div>
  );
}
export default ContentHeader;
