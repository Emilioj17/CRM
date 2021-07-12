import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/home";
import Login from "./views/Login";
import Remind from "./views/Remind";
import Products from "./views/Products";
import Category from "./views/Category";
import SingleProduct from "./views/SingleProduct";
import Checkout from "./views/Checkout";
import Profile from "./views/Profile";
import Contacto from "./views/Contacto";
import Nosotros from "./views/Nosotros";
import BienvenidoAdministrador from "./views/BienvenidoAdministrador";
import PanelAdministrador from "./views/PanelAdministrador";



function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/log-in" children={<Login />} />
          <Route exact path="/remind" children={<Remind />} />
          <Route exact path="/products" children={<Products />} />
          <Route exact path="/contacto" children={<Contacto/>} />
          <Route exact path="/category/:category_id" children= {<Category />} />
          <Route exact path="/nosotros" children={<Nosotros />} />
          <Route
            exact
            path="/product/:product_id"
            children={<SingleProduct />}
          />
          <Route exact path="/checkout" children={<Checkout />} />
          <Route exact path="/BienvenidoAdministrador" children={<BienvenidoAdministrador />} />
          <Route exact path="/PanelAdministrador" children={<PanelAdministrador />} />
          <Route exact path="/profile/:user_id" children={<Profile />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
