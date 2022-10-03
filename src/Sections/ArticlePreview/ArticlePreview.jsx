import "./ArticlePreview.scss";

function ArticlePreview(props) {
  return (
    <div className="article-preview__container">
      <div className="template-article-preview">
        test
        <div className="article-preview-title">{props.title}</div>
        <div className="articel-preview-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quis
          quaerat ducimus modi praesentium numquam, esse atque reprehenderit
          repellendus, ullam cum eligendi quae qui in at, facere eius similique
          soluta?
        </div>
      </div>
    </div>
  );
}
export default ArticlePreview;
