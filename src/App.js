import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/views/home';
import Navbar from '../src/components/navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
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
  );
}

export default App;
