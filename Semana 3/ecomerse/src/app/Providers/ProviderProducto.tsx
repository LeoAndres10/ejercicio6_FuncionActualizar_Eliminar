'use client'
import React, { useContext, useState } from 'react'
import {  PlantillaNode } from '../Modelos/PlantilaNode'
import { Producto } from '../Modelos/Producto'
import {contexProducto} from '../Context/ContextoProducto'

//children
//implementacion
//exportar

export default function ProviderProducto({children}:PlantillaNode) {

  const [producto,setProducto]=useState<Producto[]>([]);
  const [carritoProducto,setCarritoProducto]=useState<Producto[]>([]);

  function agregarCarrito(item:Producto){

    setCarritoProducto([...carritoProducto,item])
  }

  async function guardarProducto(producto:Producto){
     const respuesta = await fetch("http://localhost:5000/producto",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(producto)
     });

     const data= await respuesta.json();

     alert("Producto agregado correctamente")

  }
  async function actualizarProducto(id:number,producto:Producto) {
   try {
    
    const respuesta = await fetch(`http://localhost:5000/producto/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if(!respuesta.ok) throw new Error('Error al actualizar datos');
  const {productos} = await respuesta.json();

  setProducto((productoAnterior)=>
    productoAnterior.map((u)=>(u.idProducto===id ? productos : u))
  
);
 alert("Producto actualizado correctamente")
return productos;

       } catch (error) {
console.error('Error en actualizar producto:', error);
      throw error;    
   }

   
  }
async function eliminarProducto(id:number){
  try {
    
    const respuesta = await fetch(`http://localhost:5000/producto/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if(!respuesta.ok) throw new Error('Error al eliminar datos');
    const filtro =carritoProducto.filter(prod=> prod.idProducto !==id);
        setCarritoProducto(filtro);
        setProducto(filtro)
  const {productos} = await respuesta.json();

  
 alert("Producto eliminado correctamente")
return productos;

       } catch (error) {
console.error('Error en actualizar producto:', error);
      throw error;    
   }

      
    }
  return (
    <contexProducto.Provider value={{producto,setProducto,carritoProducto,agregarCarrito,guardarProducto,actualizarProducto,eliminarProducto}}>
        {children}
    </contexProducto.Provider>
  )
}

export function useContextProducto(){
    return useContext(contexProducto)
}
