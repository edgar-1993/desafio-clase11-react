import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../styles/cart.css'

export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    
    return (
       
       
       <div>
         
        
            {
             !cart.length ?   
               <h2>No hay elementos en el carrito <Link class="bttn-gradient bttn-md bttn-primary" to='/' >Ir al home </Link> </h2>
              :  (<>
                {cart.map(cartItem => (
                <div className="Productos" key={cartItem.item.id} >
                    <div className=""> Titulo:  {cartItem.item.title}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                   
                    <button className="bttn-gradient bttn-md bttn-success" onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)

                
                )}
                <div>Total:{totalItems} Unidades y {totalPrecio} Pesos</div> 
                <button className="bttn-gradient bttn-md bttn-success" onClick={clear}>Borrar todo</button>         
                </>
            )
            }

        </div>
    )
} 