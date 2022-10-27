import "./AboutAuthor.scss";
import { getAllUsers } from "../../Model/Author";
import { getArticles, getSingleArticle } from "../../Model/Article";

import { useEffect, useState } from "react";
import avatar from "../../assets/people/janis_ringli.jpg";
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
        src={`http://127.0.0.1:1337${article?.attributes.author.data?.attributes.avatar.data?.attributes.formats.medium.url}`}
      ></img>
      <div className="container-name">
        {article?.attributes.author.data?.attributes.name}
      </div>
      <div className="container-bio">{allUsers?.attributes.bio}</div>
    </div>
  );
}
export default AboutAuthor;
