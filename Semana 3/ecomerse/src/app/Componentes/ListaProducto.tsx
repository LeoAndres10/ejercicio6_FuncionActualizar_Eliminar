'use client'
import React from 'react'
import { useContextProducto } from '../Providers/ProviderProducto'
import CardComponent from './CardComponent'
import BotonAgrear from './BotonAgrear'
import BotonActualizar from './BotonActualizar'
import BotonEliminar from './BotonEliminar'

export default function ListaProducto() {

    const { producto } = useContextProducto()
    return (
        <div className='row'>

            {
                producto.map((item) => (
                    <div className='col-md-4' key={item.idProducto}>
                    <CardComponent {...item} key={item.idProducto}></CardComponent>
                    <BotonAgrear {...item}></BotonAgrear> 
                    <BotonActualizar {...item}></BotonActualizar>
                    <BotonEliminar {...item}></BotonEliminar>
                    </div>
                    
                ))
            }

        </div>
    )
}
