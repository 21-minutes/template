import "./ContentHeader.scss";
import linkedinIcon from "../../assets/linkedin.svg";
import linkIcon from "../../assets/link.svg";
import instagramIcon from "../../assets/instagram.svg";
import avatar from "../../assets/people/janis_ringli.jpg";
import { getAllUsers } from "../../Model/Author";
import { getArticles, getSingleArticle } from "../../Model/Article";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function ContentHeader() {
  const [allUsers, setAllUsers] = useState();
  const [article, setArticle] = useState();
  let { articleId } = useParams();

  useEffect(() => {
    async function retrieveData() {
      const authorData = await getAllUsers();
      const articleData = await getSingleArticle(articleId);

      setAllUsers(authorData);
      setArticle(articleData);
    }
    retrieveData();
  }, []);
  console.log(article?.attributes.author.data?.attributes.name);
  return (
    <div className="content-header__container">
      <div className="author-section">
        <img className="author-image" src={`http://127.0.0.1:1337${article?.attributes.author.data?.attributes.avatar.data?.attributes.formats.small.url}`}></img>
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
