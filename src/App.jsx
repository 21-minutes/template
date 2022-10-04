import "./App.scss";
import Admin from "./pages/Admin/Admin";
import SidebarLeft from "./Sections/Sidebar/Sidebar";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";
import Footer from "./Sections/Footer/Footer";
import HomeContent from "./Sections/HomeContent/HomeContent";
import Content from "./Sections/Content/Content";

function App() {
  return (
    <div>
      <div className="app-container">
        {/* <Admin></Admin> */}
        <SidebarLeft />
        <Content />
        {/* <HomeContent></HomeContent> */}
        <ProfileSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
