import "./Content.scss";
import Article from "../../components/Article/Article";
function Content() {
  return (
    <div className="content__container">
      <div className="template-content">
        <div className="content-header"></div>
        <Article />
      </div>
    </div>
  );
}
export default Content;
