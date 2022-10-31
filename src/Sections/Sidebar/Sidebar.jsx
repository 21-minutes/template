import "./Sidebar.scss";
import houseIcon from "../../assets/house.svg";

function SidebarLeft() {
  return (
    <div className="sidebar-left__container">
      <div className="template-sidebar-left">
        <div className="sidebar-left-nav">
          <a href="/">
            <img className="icon-item" src={houseIcon}></img>
          </a>
          <div className="nav-item"></div>
          <div className="nav-item"></div>
        </div>
      </div>
    </div>
  );
}
export default SidebarLeft;
