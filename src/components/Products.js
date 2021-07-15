import React from "react";
import imagen1 from "../img/productos_img1.jpg";


function Products() {
  return (
    <div className="my-5"id="products">

      <div className="container mb-5 ">
          <h1>Productos</h1>
        <div className="row d-flex">
          {/* Productos columna izquierda */}
          <div className="col-md-6 border">
           
                  <img src={imagen1} alt="" className="img-fluid" />
            
          </div>
          {/* Columnas nested derechas */}
          <div className="col-md-6 h-100">
            <div className="row">
              <div className="col-6 col-md-6 border">
              <img src={imagen1} alt="" className="img-fluid" />
              </div>
              <div className="col-6 col-md-6 border">
              <img src={imagen1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6 col-md-6 border ">
              <img src={imagen1} alt="" className="img-fluid" />
              </div>
              <div className="col-6 col-md-6 border">
              <img src={imagen1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
