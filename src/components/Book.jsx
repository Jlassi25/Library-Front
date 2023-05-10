const Book = () => {
    return ( 
      <>
  <div className="container-fluid">
    <div className="section">
      <div className="row">
        <div className="col-6 col-md-3" />
        <div className="col-6 col-md-6">
          <br /><br />
          <h1 style={{textAlign: 'center', fontWeight: 400, color: 'rgb(2, 23, 5)'}}>
            Hello, what you gonna do with these competetions?
          </h1>
          <br /><br />
          <h2 style={{textAlign: 'left', fontWeight: 300, color: 'rgb(2, 23, 5)'}}>
            List of pending competitions:
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
                <div className="col-md-12">
                  <h4 className="card-title "> <b>Dancing competition</b> </h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2"><br /><i>Description:</i>                                                 
                      </div>
                      <div className="col-md-8">
                        <p className="card-category" style={{color: 'rgb(0, 0, 0)'}}> 
                          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis error voluptatum dolore provident. Minima ut voluptatem exercitationem unde sit veritatis ratione, quae aliquam placeat inventore nisi voluptatum aspernatur commodi!
                        </p><br />
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-success" onclick="window.location.href='checkDetailComp.html'" style={{margin: 2}}>Check details</button>
                        <button className="btn btn-success" style={{margin: 2}}>Validate</button>
                        <button className="btn btn-success" style={{margin: 2}}>Supprimer</button>
                      </div>
                    </div>
                  </div>
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
</>

     );
}
 
export default Book;