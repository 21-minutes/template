import "./App.scss";
import Admin from "./pages/Admin/Admin";
// // import Home from "./pages/Home/Home";
import NewArticle from "./pages/NewArticle/NewArticle";
// import SidebarLeft from "./Sections/Sidebar/Sidebar";
// import Content from "./Sections/Content/Content";
// import ProfileSection from "./Sections/ProfileSection/ProfileSection";

function App() {
  return (
    <div className="app-container">
      <NewArticle />
      {/* <Admin></Admin> */}
      {/* <SidebarLeft />
      <Content />
      <ProfileSection /> */}
    </div>
  );
}

export default App;
