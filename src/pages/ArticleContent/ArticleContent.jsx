import "./ArticleContent.scss";
import SidebarLeft from "../../Sections/Sidebar/Sidebar";
import ProfileSection from "../../Sections/ProfileSection/ProfileSection";
import Content from "../../Sections/Content/Content";
import Footer from "../../Sections/Footer/Footer";
function ArticleContent() {
  return (
    <div className="article-content-container">
      <SidebarLeft />
      <Content />
      <ProfileSection />
      <Footer />
    </div>
  );
}
export default ArticleContent;
