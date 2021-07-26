import React from "react";



function CarouselHome() {

  return (
    <div className="mb-3" id="carousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://storage.googleapis.com/website-production/uploads/2017/10/stock-photo-guide-business-woman.jpg" className="d-block w-100" alt="..." style={{maxHeight:"800px", height:"80%"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://storage.googleapis.com/website-production/uploads/2017/10/stock-photo-guide-realistic.jpg" className="d-block w-100" alt="..."  style={{maxHeight:"800px", height:"80%"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://storage.googleapis.com/website-production/uploads/2017/10/stock-photo-guide-dog.jpg" className="d-block w-100 img_banner" alt="..." style={{maxHeight:"800px", height:"80%"}}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselHome