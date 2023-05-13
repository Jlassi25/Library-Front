

const Home = () => {
  return (
    < >
      <div className="container-fluid">
        <div className="section">
          <div className="row">
            <div className="col-6 col-md-2" />
            <div className="col-6 col-md-8">
              <br /><br />
              <h1 style={{ textAlign: 'center', fontWeight: 400, color: 'rgb(2, 23, 5)' }}>
                Hello and welcome back Admin
              </h1>
              <br /><br />
              <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'rgb(2, 23, 5)' }}>
                Here's some statistics of Vote.ly
              </h2>
            </div>
            <div className="col-6 col-md-2" />
          </div>
          <br />
          <div className="row">
            <div className="col-6 col-md-3" />
            <div className="col-6 col-md-3">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon" style={{ backgroundColor: '#d8f3dc' }}>
                  <div className="card-icon">
                    <i className="nc-icon nc-icon nc-chart-bar-32" />
                  </div>
                  <p className="card-category" style={{ color: 'black' }}>
                    Number of created competitions
                  </p>
                  <a className="nav-link" href="home">
                    <h4 className="card-title"><b>43</b> competitions</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon" style={{ backgroundColor: '#d8f3dc' }}>
                  <div className="card-icon">
                    <i className="nc-icon nc-icon nc-chart-pie-35" />
                  </div>
                  <p className="card-category" style={{ color: 'black' }}>
                    Number of registred users
                  </p>
                  <a className="nav-link" href="home">
                    <h4 className="card-title"><b>20</b> users</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" />
          </div>
        </div>
      </div>
      {/* what you looking to do*/}
      <br /><br />
      <div className="container-fluid">
        <div className="section">
          <div className="row">
            <div className="col-6 col-md-3" style={{ textAlign: 'center' }} />
            <div className="col-6 col-md-6" style={{ textAlign: 'center' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 300, color: 'rgb(2, 23, 5)' }}>
                What are you looking to do today?
              </h2>
            </div>
            <div className="col-6 col-md-3" style={{ textAlign: 'center' }} />
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="section">
          <div className="row">
            <div className="col-6 col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="box-1">
                <div className="btnn btn-one">
                  <span>Manage competitions</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="box-1">
                <div className="btnn btn-one">
                  <span>Validate competition</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="box-1">
                <div className="btnn btn-one">
                  <span>Manage users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* li ta7ti tsakkar el content sakarha ekhir el page*/}
    </>





  );
}

export default Home;