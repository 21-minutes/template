import './header.scss'


function header() {

return (
      <div className="template-header">
      <div className="header-logo">logo</div>
      <div className="header-nav">
        <div className="nav-item active"><a href="">Home</a></div>
        <div className="nav-item"><a href="">About Me</a></div>
      </div>
    </div>
    )
}
export default header