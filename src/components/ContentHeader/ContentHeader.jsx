import "./ContentHeader.scss";

function ContentHeader() {
  return (
    <div className="content-header__container">
      <div className="author-section">
        <div className="author-image"></div>
        <div className="container__author">
          <div className="author-name">Test Test</div>
          <div className="author-info">
            <div className="info-date">Sep 21</div>
            <div className="info-reading-time">2 Min read</div>
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
