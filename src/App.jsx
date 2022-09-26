import "./App.scss";
import SidebarLeft from "./Sections/Sidebar/Sidebar";
import Content from "./Sections/Content/Content";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";
import Admin from "./Sections/Admin/Admin";

function App() {
  return (
    <div className="app-container">
      <Admin></Admin>
      {/* <SidebarLeft />
      <Content />
      <ProfileSection /> */}
    </div>
  );
}

export default App;
