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

  console.log(allUsers?.attributes.name);
  return (
    <div className="about-author__container">
      <img className="container-avatar" src={avatar}></img>
      <div className="container-name">
        {allUsers?.attributes.name}Janis Ringli
      </div>
      <div className="container-bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        accusantium asperiores corporis accusamus dolorum ex, reprehenderit
        voluptatum dolor tenetur nobis dolorem eum velit quos officiis natus
        quisquam delectus numquam culpa!
      </div>
    </div>
  );
}
export default AboutAuthor;
