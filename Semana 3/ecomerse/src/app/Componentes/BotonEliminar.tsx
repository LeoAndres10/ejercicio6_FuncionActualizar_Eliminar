import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto'
import { Producto } from '../Modelos/Producto';

export default function BotonEliminar(item:Producto) {
  const {eliminarProducto} = useContextProducto();
  return (
    <button className='btn btn-danger' type='button' onClick={(e)=>eliminarProducto}>Eliminar Producto</button>
  )
}
