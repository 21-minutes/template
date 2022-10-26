import "./AboutAuthor.scss";
import { getAllUsers } from "../../Model/Author";
import { useEffect, useState } from "react";
import avatar from "../../assets/people/janis_ringli.jpg";

function AboutAuthor() {
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    async function retrieveData() {
      const authorData = await getAllUsers();
      setAllUsers(authorData);
    }
    retrieveData();
  }, []);

  return (
    <div className="about-author__container">
      <img className="container-avatar" src={avatar}></img>
      <div className="container-name">{allUsers?.attributes.name}</div>
      <div className="container-bio">{allUsers?.attributes.bio}</div>
    </div>
  );
}
export default AboutAuthor;
