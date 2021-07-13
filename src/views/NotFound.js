import React from "react";
import { useHistory } from "react-router";
import NotFoundImage from "../img/404.jpg";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <div className="card border border-danger">
            <h1 className="text-center text-light bg-danger py-2">
              404 NOT FOUND
            </h1>
            {/* <img className="card-image" src={NotFoundImage} alt="" /> */}
            <img src={NotFoundImage} alt="" className="card-img-top" />
            <div className="row">
              <div className="container d-flex justify-content-center">
                <button
                  onClick={handleClick}
                  className="btn btn-danger text-light my-3"
                >
                  Volver a Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
