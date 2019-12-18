import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Productos from './components/Productos';
import EditarProductos from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/productos/nuevo" component={Productos}/>
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/productos/:id" component={AgregarProducto}/>
        <Route exact path="/productos/editar/:id" component={EditarProductos}/>
      </Switch>
    </Router>
  );
}

export default App;
