import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className="sidebar" data-image="../assets/img/comp.png">
      {/*
    coolers li staamalt'hom https://coolors.co/palette/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15
  badal mel image-data tag 
*/}
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="home" className="simple-text">
            <img alt="yes" src="../assets/img/logoEntet.png" height="50px" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="nc-icon nc-icon nc-tv-2" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/book">
              <i className="nc-icon nc-circle-09" />
              <p>Manage Books</p>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/category">
              <i className="nc-icon nc-paper-2" />
              <p>Manage Category</p>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/borrow">
              <i className="nc-icon nc-check-2" />
              <p>Manage Borrwing</p>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/subscriber">
              <i className="nc-icon nc-circle-09" />
              <p>Manage Subscribers</p>
            </Link>
          </li>
          <li className="nav-item active active-pro">
            <a className="nav-link active" href="home">
              <i className="nc-icon nc-controller-modern" />
              <p>Go to Vote.ly</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;