import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextWrapper from "./store/appContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Recuperar from "./views/Recuperar";
import Remind from "./views/Remind";
import Products from "./components/Products";
import Category from "./views/Category";
// import SingleProduct from "./views/SingleProduct";
import Checkout from "./views/Checkout";
import Profile from "./views/Profile";
// import Contacto from "./components/Contacto";
// import Nosotros from "./components/Nosotros";
import BienvenidoAdministrador from "./views/BienvenidoAdministrador";
import BienvenidoVendedor from "./views/BienvenidoVendedor";
import PanelAdministrador from "./views/PanelAdministrador";
import SendEmail from "./views/SendEmail";
import CorreosRecibidos from "./views/CorreosRecibidos";
import CorreosEnviados from "./views/CorreosEnviados";
import CrearUsuario from "./views/CrearUsuario";
import ModificarUsuario from "./views/ModificarUsuario";
import Contacts from "./views/Contacts";
// import EditarContacto from "./views/EditarContacto";
import Deals from "./views/Deals";
import CreateContact from "./views/CreateContact";
import CreateDeal from "./views/CreateDeal";
import EditDeal from "./views/EditDeal";
import ContactoSuccess from "./views/ContactoSuccess";
import NotFound from "./views/NotFound";
import EditContact from "./views/EditContact";
import Notes from "./views/Notes";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Switch>
          {/* Pagina Principal */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/recuperar" component={Recuperar} />
          <Route exact path="/products" component={Products} />
          {/* <Route exact path="/contacto" component={Contacto} /> */}
          <Route exact path="/contacto/success" component={ContactoSuccess} />
          {/* <Route exact path="/nosotros" component={Nosotros} /> */}
          {/* <Route exact path="/producto" component={Products} /> */}

          {/* ??? */}
          <Route exact path="/remind" component={Remind} />
          <Route exact path="/category/:category_id" component= {Category} />
          <Route exact path="/checkout" component={Checkout} />
          {/* <Route exact path="/product/:product_id" component={SingleProduct} /> */}

          {/* Panel Usuario */}
          <Route exact path="/BienvenidoVendedor" component={BienvenidoVendedor} />
          <Route exact path="/tratos" component= {Deals} />
          <Route exact path="/contactos" component= {Contacts} />
          <Route exact path="/contactos/:id" component= {Notes} />
          <Route exact path="/crear/contacto" component= {CreateContact} />
          <Route exact path="/crear/trato" component= {CreateDeal} />
          <Route exact path="/editar/trato/:id" component= {EditDeal} />
          <Route exact path="/editar/contacto/:id" component= {EditContact} />
          {/* <Route exact path="/editar/contacto" children={<EditarContacto/>}/> */}
          <Route exact path="/profile/:user_id" component={Profile} />
          {/*Panel enviar Correos*/}
          <Route exact path="/SendEmail" component={SendEmail} />
          <Route exact path="/CorreosRecibidos" component={CorreosRecibidos} />
          <Route exact path="/CorreosEnviados" component={CorreosEnviados} />
          {/* Panel Admin */}
          <Route exact path="/BienvenidoAdministrador" component={BienvenidoAdministrador} />
          <Route exact path="/PanelAdministrador" component={PanelAdministrador} />
          <Route exact path="/CrearUsuario" component={CrearUsuario} />
          <Route exact path="/ModificarUsuario" component={ModificarUsuario} />
          {/* 404 */}
          <Route path='*' component={<NotFound/>} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default ContextWrapper(App);
