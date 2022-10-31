import "./Admin.scss";
import { useState } from "react";

function Admin() {
  const [authorName, setAuthorName] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [authorDescription, setAuthorDescription] = useState("");

  const handleChangeAuthorName = (event) => {
    setAuthorName(event.target.value);
  };
  const handleChangeReadingTime = (event) => {
    setReadingTime(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
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
    <div className="contaiener">
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

        <input
          type="number"
          placeholder="Readingtime"
          className="test"
          name="readingTime"
          id="readingTime"
          onChange={handleChangeReadingTime}
          onSubmit={sendIt}
          value={readingTime}
        />
        <input
          type="text"
          placeholder="Title"
          className="test"
          name="title"
          id="title"
          onChange={handleChangeTitle}
          value={title}
        />
        <textarea
          type="text"
          placeholder="Content"
          className="test"
          name="text"
          id="text"
          onChange={handleChangeText}
          value={text}
        />
        <input
          type="Date"
          placeholder="Date"
          className="test"
          name="date"
          id="date"
          onChange={handleChangeDate}
          value={date}
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
