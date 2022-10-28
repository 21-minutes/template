import "./HomeSection.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import RecommendedTopics from "../../components/RecommendedTopics/RecommendedTopics";

function ProfileSection() {
  return (
    <div className="home-section__container">
      <div className="home-section-wrapper">
        <div className="home-section__content">
          <SearchInput></SearchInput>
          <RecommendedTopics></RecommendedTopics>
        </div>
      </div>
    </div>
  );
}
export default ProfileSection;
