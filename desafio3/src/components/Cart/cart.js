import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../styles/cart.css'
import firebase from 'firebase/app'

import {getFirestore} from '../firebase/index'

export const Cart = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [idOrden, setIdOrden ] = useState(null)

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)


    const finalizarCompra = (e) =>{
        generarOrden(e)
        clear()
    }

    const generarOrden = (e)=>{
        e.preventDefault();
        const comprador = { name, phone, email }
        
        console.log(comprador)

        const db = getFirestore();

        const ordersCollection = db.collection("orders")

        const date = firebase.firestore.Timestamp.fromDate(new Date());

        const items = cart.map(cartItem => {
            return {id: cartItem.item.id, title:cartItem.item.title, price: cartItem.item.price} 
        })

        ordersCollection
        .add({buyer: comprador, items , date, total:totalPrecio })
        .then(doc=>{
            setIdOrden(doc.id)
        });


        let itemIds = cart.map((e) => e.item.id)

        const itemsCollection = db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(), "in", itemIds)

        itemsCollection.get()
        .then(resultado =>{
            const batch = db.batch()

            for (const documento of resultado.docs) {

                const stockActual = documento.data().stock;

                const itemDelCart = cart.find(cartItem => cartItem.item.id == documento.id);

                const cantidadComprado = itemDelCart.quantity;

                const nuevoStock =  stockActual - cantidadComprado;


                batch.update(documento.ref,
                    {stock: nuevoStock}
                )
                //update
                
            }

            batch.commit()

        })


    }
   

    return (
       
       
       <div>
         
         {idOrden? `Orden generada : Numero----> ${idOrden}`: null}

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
               
            
                  
               
                <form className="" action=""  onSubmit={finalizarCompra}>
                    <input className="formulario mb-5" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>Nombre
                    <input className="formulario mb-5" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>Telefono
                    <input className="formulario mb-5" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>Email
                    <button type="submit"> Generar orden</button>
                </form> 

                </>
            )
            }

        </div>
    )
} 









/*buyer
(mapa)
email
"edgar.espinoladavid@gmail.com"
name
"Edgar"
phone
"1134470765"
date
21 de abril de 2021 a las 21:38:30 UTC-3
items
0
id
"2CLD9nzf4gIOe4djn9pJ"
price
4750
title
"Hamburguesa vegano 1"
total
4750 */