import React, { useContext } from "react";
import img from '../../imagenes/carrito.png';
import { CartContext } from "../context/CartContext";




export const CartWidget = () =>{

const {totalItems}  = useContext(CartContext)
   
    return <>
        <div className="d-flex"> 
        <i className=""><img src={img}></img></i>
        <span className="badge rounded-pill bg-light text-dark">{totalItems}</span>
        </div>
      </>  
      
      
  }
  
  export default CartWidget;

  