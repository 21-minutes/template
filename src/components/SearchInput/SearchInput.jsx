import "./SearchInput.scss";
import searchIcon from "../../assets/search.svg";
import { useState } from "react";

function SearchInput() {
  const [input, setInput] = useState("");
  function handleOnChange(event) {
    setInput(event.target.value);
    console.log(input);
  }
  return (
    <div className="search-input__container">
      <div className="search-input__container__input">
        <img className="input-icon" src={searchIcon}></img>
        <input
          className="input-text"
          placeholder="Search"
          onChange={handleOnChange}
          id="input"
          name="input"
          value={input}
        ></input>
      </div>
    </div>
  );
}
export default SearchInput;
