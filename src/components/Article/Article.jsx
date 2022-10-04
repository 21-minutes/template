import "./Article.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
function Article(props) {
  return (
    //TODO: Replace content with api variables

    <div className="article__container">
      <div className="template-article">
        <ContentHeader name="Janis Ringli" date="4 Oct" readingTime="5 Min" />
        <div className="article-title">{props.title}</div>
        <div className="article-content">{props.text}</div>
      </div>
    </div>
  );
}
export default Article;
