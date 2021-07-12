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
import Contact from "./views/Contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
<<<<<<< HEAD
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Home} />
            <Route exact path="/contacto" component={Home} />
            <Route exact path="/producto" component={Home} />
            <Route exact path="/login" component={Home} />

            <Route render={() => <h1>Not found!</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
=======
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/log-in" children={<Login />} />
          <Route exact path="/sign-up" children= {<Signup />} />
          <Route exact path="/remind" children={<Remind />} />
          <Route exact path="/products" children={<Products />} />
          <Route exact path="/contact" children={<Contact/>} />
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
>>>>>>> 606fc5d9857e429111824fd332fe7a8c311e290f
  );
}

export default App;
