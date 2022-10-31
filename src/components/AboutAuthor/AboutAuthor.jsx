import "./AboutAuthor.scss";
import { getAllUsers } from "../../Model/Author";
import { getArticles, getSingleArticle } from "../../Model/Article";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AboutAuthor() {
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

  return (
    <div className="about-author__container">
      <img
        className="container-avatar"
        src={`${import.meta.env.VITE_REACT_APP_STRAPI_API_URL}${
          article?.attributes.author.data?.attributes.avatar.data?.attributes
            .formats.medium.url
        }`}
      ></img>
      <div className="container-name">
        {article?.attributes.author.data?.attributes.name}
      </div>
      <div className="container-bio">{allUsers?.attributes.bio}</div>
    </div>
  );
}
export default AboutAuthor;
