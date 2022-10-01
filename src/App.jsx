import "./App.scss";
import Admin from "./pages/Admin/Admin";
// import Home from "./pages/Home/Home";
import SidebarLeft from "./Sections/Sidebar/Sidebar";
import Content from "./Sections/Content/Content";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <div>
      <div className="app-container">
        {/* <Admin></Admin> */}
        <SidebarLeft />
        <Content />
        <ProfileSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
