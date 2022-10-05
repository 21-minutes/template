import "./ProfileSection.scss";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";
import SearchInput from "../../components/SearchInput/SearchInput";

function ProfileSection() {
  return (
    <div className="profile-section__container">
      <div className="profile-section__content">
        <SearchInput></SearchInput>
        <AboutAuthor />
      </div>
    </div>
  );
}
export default ProfileSection;
