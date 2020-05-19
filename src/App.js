import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Vendedor from './components/vendedor'
import Producto from './components/producto'
function App() {
  return (
    <div className="App container-fluid" id = "contenedor_padre">
    
    
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to = "/vendedor" className="nav-link">Vendedor</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/producto" className="nav-link">Producto</Link>
                </li>
              </ul>
            
            </div>
          </nav>
        <div>
          <Route exact path="/" component={Vendedor} />
          <Route exact path="/vendedor" component={Vendedor} />
          <Route exact path="/producto" component={Producto} />
        </div>
      </Router>
    </div>
  );
}

export default App;
