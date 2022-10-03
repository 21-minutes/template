import "./NewArticle.scss";
import { useState } from "react";

function NewArticle() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [readingTime, setReadingTime] = useState("");

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
  return (
    <div className="NewArticle">
      <h1>Create New Article</h1>
      <input
        type="number"
        placeholder="Readingtime"
        className="test"
        name="readingTime"
        id="readingTime"
        onChange={handleChangeReadingTime}
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
    </div>
  );
}
export default NewArticle;
