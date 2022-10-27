import "./Article.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { getArticles } from "../../Model/Article";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [article, setArticle] = useState([]);

  let { articleId } = useParams();
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
        <ContentHeader date="4 Oct" />
        <div className="container-content">
          <div className="article-title">
            {article[articleId - 1]?.attributes.title}
          </div>
          <div className="article-content">
            {article[articleId - 1]?.attributes.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
