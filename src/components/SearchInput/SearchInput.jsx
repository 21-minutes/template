import "./SearchInput.scss";
import searchIcon from "../../assets/search.svg";

function SearchInput() {
  return (
    <div className="search-input__container">
      <div className="search-input__container__input">
        <img className="input-icon" src={searchIcon}></img>
        <input className="input-text" placeholder="Search"></input>
      </div>
    </div>
  );
}
export default SearchInput;
