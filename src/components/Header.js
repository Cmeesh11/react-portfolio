import '../styles.css'
function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg p-4 fs-2">
  <div className="container-fluid">
    <span className="navbar-brand navbar-text">Carter Michaud</span>
      <ul className="navbar-nav ms-auto mb-2 d-flex flex-sm-row justify-content-between align-items-center">
        <li className="nav-item mx-1">
          <a className="nav-link navbar-text" onClick={() => props.handlePageChange('about')} href="#">About me</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link navbar-text" onClick={() => props.handlePageChange('portfolio')} href="#">Portfolio</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link navbar-text" onClick={() => props.handlePageChange('contact')} href="#">Contact</a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link navbar-text" onClick={() => props.handlePageChange('resume')} href="#">Resume</a>
        </li>
      </ul>
  </div>
</nav>
  );
}


export default Header;