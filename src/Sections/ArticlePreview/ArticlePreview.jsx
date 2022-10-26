import "./ArticlePreview.scss";

function ArticlePreview(props) {
  return (
    <div className="article-preview__container">
      <div className="template-article-preview">
        <div className="article-preview-header">
          <div className="header-avatar"></div>
          <div className="header-author">{props.author}</div>
          <div className="header-date">{props.date}</div>
        </div>
        <div className="article-preview-content">
          <div className="article-preview-main">
            <div className="article-preview-title">{props.title}</div>
            <div className="articel-preview-text">{props.text}</div>
          </div>
          <div className="article-preview-image"></div>
        </div>
        <div className="article-preview-footer">
          <div className="footer-topic">{props.topic}</div>
          <div className="dot"></div>
          <div className="footer-reading-time">{props.readingTime}</div>
        </div>
      </div>
    </div>
  );
}
export default ArticlePreview;
