import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../styles/cart.css'
import firebase from 'firebase/app'

import {getFirestore} from '../firebase/index'

export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () =>{
        const db = getFirestore();

        const ordersCol = db.collection('orders');

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name:'Edgar', phone:'1134470765', email:'edgar.espinoladavid@gmail.com'}
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;

            return {id, title, price}   
        })


        ordersCol.add(orden)
        
        .then((IdDocumento)=>{
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log('termino la promesa')
        })

        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
        )

        const batch = db.batch();

        // por cada item restar del stock la cantidad de el carrito

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })

        console.log(orden)
    }
   

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
                <button className="bttn-gradient bttn-md bttn-danger" onClick={clear}>Borrar todo</button>
               
            
                <Link class="bttn-gradient bttn-md bttn-primary" to='/' onClick={generarOrden}>Finalizar compra </Link>  
               
               
                </>
            )
            }

        </div>
    )
} 