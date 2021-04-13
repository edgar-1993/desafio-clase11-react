import React from "react";
import img from '../../imagenes/carrito.png';
import { CartContext } from "../context/CartContext";
import {ItemCount} from '../ItemCount/ItemCount';



const CartWidget = () =>{

const count = React.useState(0)  
   
    return(
  
      <>
        <div className="d-flex"> 
        <i className=""><img src={img}></img></i>
        <span className="badge rounded-pill bg-light text-dark">{count}</span>
        </div>
      </>  
    )   
      
  }
  
  export default CartWidget;