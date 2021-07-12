import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Remind from "./views/Remind";
import Products from "./views/Products";
import Category from "./views/Category";
import SingleProduct from "./views/SingleProduct";
import Checkout from "./views/Checkout";
import Profile from "./views/Profile";
import Contacto from "./views/Contacto";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/log-in" children={<Login />} />
          <Route exact path="/sign-up" children= {<Signup />} />
          <Route exact path="/remind" children={<Remind />} />
          <Route exact path="/products" children={<Products />} />
          <Route exact path="/contacto" children={<Contacto/>} />
          <Route exact path="/category/:category_id" children= {<Category />} />
          <Route
            exact
            path="/product/:product_id"
            children={<SingleProduct />}
          />
          <Route exact path="/checkout" children={<Checkout />} />
          <Route exact path="/profile/:user_id" children={<Profile />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
