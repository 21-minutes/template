import "./ContentHeader.scss";
import linkedinIcon from "../../assets/linkedin.svg";
import linkIcon from "../../assets/link.svg";
import instagramIcon from "../../assets/instagram.svg";
import { getAllUsers } from "../../Model/Author";
import { getArticles, getSingleArticle } from "../../Model/Article";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function ContentHeader() {
  const [article, setArticle] = useState();
  let { articleId } = useParams();

  useEffect(() => {
    async function retrieveData() {
      const articleData = await getSingleArticle(articleId);

      setArticle(articleData);
    }
    retrieveData();
  }, []);
  return (
    <div className="content-header__container">
      <div className="author-section">
        <img
          className="author-image"
          src={`${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}${
            article?.attributes.author.data?.attributes.avatar.data?.attributes
              .formats.small.url
          }`}
        ></img>
        <div className="container__author">
          <div className="author-name">
            {article?.attributes.author.data?.attributes.name}
          </div>
          <div className="author-info">
            <div className="info-date">{article?.attributes.date}</div>
            <div className="dot"></div>
            <div className="info-reading-time">
              {article?.attributes.readingTime} min read
            </div>
          </div>
        </div>
      </div>
      <div className="author-socials">
        <div className="socials-item">
          <img className="item-icon" src={linkedinIcon}></img>
          <img className="item-icon" src={linkIcon}></img>
          <img className="item-icon" src={instagramIcon}></img>
          <div className="item-icon"></div>
        </div>
      </div>
    </div>
  );
}
export default ContentHeader;
