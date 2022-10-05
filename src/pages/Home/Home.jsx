import "./Home.scss";
import SidebarLeft from "../../Sections/Sidebar/Sidebar";
import ProfileSection from "../../Sections/ProfileSection/ProfileSection";
import Footer from "../../Sections/Footer/Footer";
import HomeContent from "../../Sections/HomeContent/HomeContent";

function App() {
  return (
    <div>
      <div className="app-container">
        <SidebarLeft />
        <HomeContent />
        <ProfileSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
