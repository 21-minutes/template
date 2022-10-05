import "./Sidebar.scss";
import houseIcon from "../../assets/house.svg";

function SidebarLeft() {
  return (
    <div className="sidebar-left__container">
      <div className="template-sidebar-left">
        <div className="sidebar-left-nav">
          <img className="nav-item" src={houseIcon}></img>
          <div className="nav-item"></div>
          <div className="nav-item"></div>
        </div>
      </div>
    </div>
  );
}
export default SidebarLeft;
