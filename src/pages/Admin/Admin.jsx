import "./Admin.scss";
import { useState } from "react";

function Admin() {
  const [authorName, setAuthorName] = useState("");
  const [readingTime, setReadingTime] = useState("");

  const [avatar, setAvatar] = useState("");
  const [authorDescription, setAuthorDescription] = useState("");

  const handleChangeAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);
  };
  const handleChangeAuthorDescription = (event) => {
    setAuthorDescription(event.target.value);
  };
  function sendIt() {
    console.log("Authorname: " + authorName);
    console.log("Readingtime: " + readingTime);
    console.log("Author Description: " + authorDescription);
    console.log("Title: " + title);
    console.log("Text: " + text);
    console.log("Date: " + date);
    console.log("Avatar: " + avatar);
  }
  return (
    <div className="container">
      <div className="admin-container">
        <form onSubmit={sendIt()}>
          <h1>Admin</h1>
          <input
            autoComplete="off"
            type="text"
            placeholder="Authorname"
            className="test"
            id="authorName"
            name="authorName"
            onChange={handleChangeAuthorName}
            value={authorName}
          />
          <h2>{authorName}</h2>
          <textarea
            type="text"
            placeholder="Author description"
            className="test"
            onChange={handleChangeAuthorDescription}
            name="authorDescription"
            value={authorDescription}
            id="AuthorDescription"
          />
          <input
            type="file"
            placeholder="Avatar"
            name="avatar"
            id="avatar"
            onChange={handleChangeAvatar}
            value={avatar}
          />

          <button onClick={sendIt} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="info-collector">
        <h1>Info</h1>
        <h2>Authorname: {authorName}</h2>
        <h2>Readingtime: {readingTime}</h2>
        <h2>Author Description: {authorDescription}</h2>
        <h2>Title: {title}</h2>
        <h2>Text: {text}</h2>
        <h2>Date: {date}</h2>
        <h2>Avatar: {avatar}</h2>
      </div>
    </div>
  );
}
export default Admin;
