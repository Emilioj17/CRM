import React from "react";
import Carousel from "../components/CarouselHome";
import Contacto from "../components/Contacto";
import Nosotros from "../components/Nosotros";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <Carousel />
        <Nosotros />
        <Products />
        <Contacto />
      </div>
    </div>
  );
};
export default Home;
