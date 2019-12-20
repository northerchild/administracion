import React,{Fragment} from 'react'
import ProductoLista from './ProductoLista'

function Productos({productos}){
    return(
        <Fragment>
            <h1 className="text-center">Nuevo Producto</h1>
            <ul className="lis-group mt-5">
                {productos.map(producto=>(
                    <ProductoLista
                    key = {producto.id} 
                    producto={producto}/>
                ))}
            </ul>
        </Fragment>
    )
}
export default Productos;