

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#326f59', color: 'white'}} color-on-scroll={500}>
        <div className="container-fluid">
          <a className="navbar-brand" href="home" style={{color: 'white'}}>Vote.ly - Admin dashboard</a>
          <button  className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar burger-lines" />
            <span className="navbar-toggler-bar burger-lines" />
            <span className="navbar-toggler-bar burger-lines" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="home">
                  <span className="no-icon" style={{color: 'white'}}>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default NavBar;