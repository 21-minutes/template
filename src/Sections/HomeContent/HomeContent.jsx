import "./HomeContent.scss";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
function Content() {
  return (
    <div className="home-content__container">
      <div className="template-home-content">
        <div className="home-content-header">
          <ArticlePreview title="Test"></ArticlePreview>
        </div>
      </div>
    </div>
  );
}
export default Content;
