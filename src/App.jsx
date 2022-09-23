import "./App.css";
import SidebarLeft from "./Sections/Sidebar/Sidebar";
import Content from "./Sections/Content/Content";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";
import { getAllUsers, createUser } from "./Model/Author.js";
//call the function getAllUsers() from the Author.js file
getAllUsers();

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
