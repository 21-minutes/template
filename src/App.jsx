import "./App.css";
import SidebarLeft from "./Sections/Sidebar/Sidebar";
import Content from "./Sections/Content/Content";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";

function App() {
  return (
    <div className="app-container">
      <SidebarLeft />
      <Content />
      <ProfileSection />
    </div>
  );
}

export default App;
