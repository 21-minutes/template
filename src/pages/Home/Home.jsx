import "./Home.scss";
import SidebarLeft from "../../Sections/Sidebar/Sidebar";
// import ProfileSection from "../../Sections/ProfileSection/ProfileSection";
import HomeSection from "../../Sections/HomeSection/HomeSection";

import Footer from "../../Sections/Footer/Footer";
import HomeContent from "../../Sections/HomeContent/HomeContent";

function App() {
  return (
    <div>
      <div className="app-container">
        <SidebarLeft />
        <HomeContent />
        {/* <ProfileSection /> */}
        <HomeSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
