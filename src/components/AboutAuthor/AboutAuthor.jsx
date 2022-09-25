import "./AboutAuthor.scss";
import { getAllUsers } from "../../Model/Author";
import { useEffect, useState } from "react";

function AboutAuthor() {
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    async function retrieveData() {
      const authorData = await getAllUsers();
      setAllUsers(authorData);
    }
    retrieveData();
  }, []);

  console.log(allUsers?.attributes.name);
  return (
    <div className="about-author__container">
      <div className="container-avatar">{allUsers?.attributes.name}</div>
      <div className="container-name"></div>
    </div>
  );
}
export default AboutAuthor;
