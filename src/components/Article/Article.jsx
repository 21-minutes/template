import "./Article.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { getSingleArticle } from "../../Model/Article";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [article, setArticle] = useState();

  let { articleId } = useParams();
  useEffect(() => {
    async function retrieveData() {
      const articleData = await getSingleArticle(articleId);
      setArticle(articleData);
    }

    retrieveData();
  }, []);
  document.title = article?.attributes.title;
  return (
    //TODO: Replace content with api variables
    <div className="article__container">
      <div className="template-article">
        <ContentHeader date="4 Oct" />
        <div className="container-content">
          <div className="article-title">{article?.attributes.title}</div>
          <div className="article-content">{article?.attributes.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
