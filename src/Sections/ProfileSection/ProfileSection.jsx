import "./ProfileSection.scss";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";
import SearchInput from "../../components/SearchInput/SearchInput";
import RecommendedTopics from "../../components/RecommendedTopics/RecommendedTopics";

function ProfileSection() {
  return (
    <div className="profile-section__container">
      <div className="profile-section-wrapper">
        <div className="profile-section__content">
          <SearchInput></SearchInput>
          <AboutAuthor />
          <RecommendedTopics></RecommendedTopics>
        </div>
      </div>
    </div>
  );
}
export default ProfileSection;
