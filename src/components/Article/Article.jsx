import "./Article.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { getArticles } from "../../Model/Article";
import { useEffect, useState } from "react";

function Article() {
  const [article, setArticle] = useState();

  useEffect(() => {
    async function retrieveData() {
      const articleData = await getArticles();
      setArticle(articleData);
    }
    retrieveData();
  }, []);

  return (
    //TODO: Replace content with api variables
    <div className="article__container">
      <div className="template-article">
        <ContentHeader date="4 Oct" readingTime="5 Min" />
        <div className="container-content">
          <div className="article-title">{article?.attributes.title}</div>
          <div className="article-content">{article?.attributes.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
