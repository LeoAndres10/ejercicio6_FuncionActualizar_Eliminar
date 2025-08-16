import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Producto } from '../Modelos/Producto';

export default function BotonActualizar( item: Producto) {
  const {producto , actualizarProducto, setProducto} = useContextProducto();
  const router = useRouter();

  const [idProducto,setIdProducto]= useState<number>(0);
  const [nombreProducto,setNombreProducto]= useState<string>('');
    const [precioProducto,setPrecioProducto]= useState<number>(0);
const [isvProducto,setIsvProducto]= useState<number>(0);
const [imgProducto,setImgProducto]= useState<string>('');

    
   
  useEffect(() => {
    const prod=  producto.find((u) => u.idProducto === idProducto);
    if (prod) setProducto([prod]);
  }, [idProducto, producto, setProducto]);

  function actualizarProductoIndividual(){

    const nuevosDatos : Producto={
        idProducto:idProducto,
        nombreProducto:nombreProducto,
        precioProducto:precioProducto,
        isvProducto:isvProducto,
        imgProducto:imgProducto
    }
    actualizarProducto(idProducto,nuevosDatos);
   
  }
  

  return (
   
            
<div>
     { 
     
        <div className='card' key={item.idProducto}>
                <div className='card-hader'>
                    {item.nombreProducto}
                </div>
                <div className='card-body'>
     
      <input name="idProducto" value={idProducto} onChange={(e)=>setIdProducto} />
      <input name="nombre Producto" value={nombreProducto} onChange={(e)=>setNombreProducto(e.target.value)} />
      <input name="Precio Producto" value={precioProducto} onChange={(e)=>setPrecioProducto} />
      <input name="ISV Producto" value={isvProducto} onChange={(e)=>setIsvProducto} />
      <input name="IMG Producto" value={imgProducto} onChange={(e)=>setImgProducto} />

     <button type='button' className='btn btn-primary' onClick={()=>actualizarProductoIndividual}>Actualizar Producto</button> <br />
  </div>
  </div>
     }
       </div>

  );
}

  

