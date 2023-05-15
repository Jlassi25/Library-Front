import { Hoc } from "../HOC/hoc";

const ManageBooking = () => {
    return ( 
        <>
       <div className="content">
  <div className="container-fluid">
    <div className="section">
      <div className="row">
        <div className="col-6 col-md-3" />
        <div className="col-6 col-md-6">
          <br /><br />
          <h1 style={{textAlign: 'center', fontWeight: 400, color: 'rgb(2, 23, 5)'}}>
            Hello, what you gonna do with all these users?
          </h1>
          <br /><br />
          <h2 style={{textAlign: 'left', fontWeight: 300, color: 'rgb(2, 23, 5)'}}>
            List of users:
          </h2>
        </div>
        <div className="col-6 col-md-3" />
      </div>
      <br />
    </div>
    <div className="section">
      <div className="row">
        <div className="col-6 col-md-2" />
        <div className="col-6 col-md-8">
          {/* boucli for hne*/}
          <div className="card" style={{backgroundColor: '#326f59'}}>
            <div className="card-header card-header-success" style={{backgroundColor: '#B7E4C7'}}>
              <div className="row">
                <div className="col-md-10">
                  <h4 className="card-title "> <b>Salih Ben Hadj Amor</b> </h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3"><br /><i>Coordonnées:</i>                                                 
                      </div>
                      <div className="col-md-9">
                        <p className="card-category" style={{color: 'rgb(0, 0, 0)'}}> <br />
                          Name: Salih <br />
                          Email: Salouh@gmail.com<br />
                          Date of birth: 21/04/2000<br />
                        </p><br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2"><br /><br /><br />
                  <button className="btn btn-success">Supprimer</button>
                </div>
              </div>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-6 col-md-2" />
      </div>
      <br />
    </div>
  </div>
  {/* what you looking to do*/}
  <br /><br />
  <br />
  {/* li ta7ti tsakkar el content sakarha ekhir el page*/}
</div>
</>
     );
     
}
 
export default Hoc(ManageBooking) ;