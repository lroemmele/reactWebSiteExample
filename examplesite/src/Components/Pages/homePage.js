import React, { Component } from 'react';


class Home extends Component {
  render() {

    return (
      <div className="container-fluid">

        <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="http://principia.info/wp-content/uploads/2017/10/bathroom-vanities-with-sitting-area-four-seasons-seychelles-resort-villas-x--and-captivating-inspiration.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="http://1049theriver.com/wp-content/uploads/2017/06/Fireworks-1200-x-600.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="http://wallgem.com/wp-content/uploads/2017/12/anime-laptop-wallpaper.jpg" alt="Third slide"/>
                </div>
              </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12" >
                <div className="container" id="homeContent">hello</div>
              </div>
              <div className="col col-xl-2 col-lg-2 hidden-xs-sm-md" >
                <div className="container" id="sideBar">world</div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Home;
