import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextWrapper from "./store/appContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Recuperar from "./views/Recuperar";
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
import SendEmail from "./views/SendEmail";
import CorreosRecibidos from "./views/CorreosRecibidos";
import CorreosEnviados from "./views/CorreosEnviados";
import CrearUsuario from "./views/CrearUsuario";
import ModificarUsuario from "./views/ModificarUsuario";
import Contacts from "./views/Contacts";
import EditarContacto from "./views/EditarContacto";
import Deals from "./views/Deals";
import CreateContact from "./views/CreateContact";
import CreateDeal from "./views/CreateDeal";
import EditDeal from "./views/EditDeal";
import ContactoSuccess from "./views/ContactoSuccess";
import NotFound from "./views/NotFound";
import EditContact from "./views/EditContact";
import Notes from "./views/Notes";

function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Switch>
          {/* Pagina Principal */}
          <Route exact path="/" children={<Home />} />
          <Route exact path="/login" children={<Login />} />
          <Route exact path="/registro" children={<Registro />} />
          <Route exact path="/recuperar" children={<Recuperar />} />
          <Route exact path="/contacto" children={<Contacto/>} />
          <Route exact path="/contacto/success" children={ <ContactoSuccess/>} />
          <Route exact path="/nosotros" children={<Nosotros />} />
          <Route exact path="/producto" children={<Products />} />

          {/* ??? */}
          <Route exact path="/remind" children={<Remind />} />
          <Route exact path="/category/:category_id" children= {<Category />} />
          <Route exact path="/checkout" children={<Checkout />} />
          <Route exact path="/product/:product_id" children={<SingleProduct />} />

          {/* Panel Usuario */}
          <Route exact path="/tratos" children= {<Deals/>} />
          <Route exact path="/contactos" children= {<Contacts/>} />
          <Route exact path="/contactos/:id" component= {Notes} />
          <Route exact path="/crear/contacto" children= {<CreateContact/>} />
          <Route exact path="/crear/trato" children= {<CreateDeal/>} />
          <Route exact path="/editar/trato/:id" component= {EditDeal} />
          <Route exact path="/editar/contacto/:id" component= {EditContact} />
          <Route exact path="/product/:product_id"children={<SingleProduct />}/>
          <Route exact path="/checkout" children={<Checkout />} />
          <Route exact path="/BienvenidoAdministrador" children={<BienvenidoAdministrador />} />
          <Route exact path="/PanelAdministrador" children={<PanelAdministrador />} />
          <Route exact path="/SendEmail" children={<SendEmail />} />
          <Route exact path="/CorreosRecibidos" children={<CorreosRecibidos />} />
          <Route exact path="/CorreosEnviados" children={<CorreosEnviados />} />
          {/* <Route exact path="/editar/contacto" children={<EditarContacto/>}/> */}
          <Route exact path="/SendEmail" children={<SendEmail />} />
          <Route exact path="/profile/:user_id" children={<Profile />} />
          
          {/* Panel Admin */}
          <Route exact path="/BienvenidoAdministrador" children={<BienvenidoAdministrador />} />
          <Route exact path="/PanelAdministrador" children={<PanelAdministrador />} />
          <Route exact path="/CrearUsuario" children={<CrearUsuario />} />
          <Route exact path="/ModificarUsuario" children={<ModificarUsuario />} />
          {/* 404 */}
          <Route path='*' children={<NotFound/>} />
        </Switch>
      </Router>
    </>
  );
}

export default ContextWrapper(App);
