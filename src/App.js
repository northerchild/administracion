import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Productos from './components/Productos';
import EditarProductos from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Header from './components/Header';
function App() {

  const [ productos, guardarProductos ] = useState([]);

  useEffect(()=>{
    const consultarApi = async ()=>{
      //consultar la api de json-server
      const resultado = await axios.get('http://localhost:4000/restaurant');
      guardarProductos(resultado.data);
    }
    consultarApi()
  })


  return (
    <Router>
      <Header />
      <main className="container mt-5">
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto}/>
        <Route exact path="/productos" render={()=> (<Productos productos={productos} />)}/>
        <Route exact path="/productos/:id" component={Productos}/>
        <Route exact path="/productos/editar/:id" render={props=>{
          //Tomar el ID del producto
          const idProducto = parseInt(props.match.params.id);
          //El producto que se pasa al state
          const producto = productos.filter(producto => producto.id === idProducto);
          return(
            <EditarProductos producto={producto[0]}/>
          )
        }}/>
      </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
