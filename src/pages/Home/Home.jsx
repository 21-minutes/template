import "./Home.scss";
import SidebarLeft from "../../Sections/Sidebar/Sidebar";
import ProfileSection from "../../Sections/ProfileSection/ProfileSection";
import Footer from "../../Sections/Footer/Footer";

function App() {
  return (
    <div>
      <div className="app-container">
        {/* <Admin></Admin> */}
        <SidebarLeft />
        <Home />
        <ProfileSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
