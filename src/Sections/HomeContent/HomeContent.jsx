import "./HomeContent.scss";
import { getArticles } from "../../Model/Article";

import { useEffect, useState } from "react";
function Content() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function retrieveData() {
      const articleData = await getArticles();

      setArticle(articleData);
    }
    retrieveData();
  }, []);

  return (
    <div className="home-content__container">
      <div className="home-content-header"></div>
      <div className="template-home-content">
        {/* ------------------------------- */}
        {article.map((article) => (
          <a
            className="article-preview__container"
            href={"/Article/" + article.id}
            key={article.id}
          >
            <div className="template-article-preview">
              <div className="article-preview-header">
                <img
                  className="header-avatar"
                  src={`${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}${
                    article?.attributes.author.data?.attributes.avatar.data
                      ?.attributes.formats.small.url
                  }`}
                ></img>
                <div className="header-author">
                  {article?.attributes.author.data?.attributes.name}
                </div>
                <div className="dot"></div>

                <div className="header-date">{article?.attributes.date}</div>
              </div>
              <div className="article-preview-content">
                <div className="article-preview-main">
                  <div className="article-preview-title">
                    {article?.attributes.title}
                  </div>
                  <div className="articel-preview-text">
                    {article?.attributes.contentPreview}
                  </div>
                </div>
                <img
                  className="article-preview-image"
                  src={`${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}${
                    article?.attributes.thumbnail.data?.attributes.formats
                      .thumbnail.url
                  }`}
                ></img>
              </div>
              <div className="article-preview-footer">
                <div className="footer-topic">
                  {article?.attributes.topics?.data[0].attributes.name}
                </div>
                <div className="dot"></div>
                <div className="footer-reading-time">
                  {article?.attributes.readingTime} min read
                </div>
              </div>
            </div>
          </a>
        ))}
        {/* -------------------------------- */}
      </div>
    </div>
  );
}
export default Content;
