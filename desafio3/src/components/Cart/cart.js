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
<table class="table table-striped table container Productos1 ">
<thead className="">
    <tr>
      
      <th className="col-5" scope="col-5">Titulo</th>
      <th  className="col-5" scope="col-5">Cantidad</th>
      <th  className="col-2" scope="col-5">🗑️</th>
      
    </tr>
  </thead>
  </table>        
                {cart.map(cartItem => (
                
                <div className="Productos" key={cartItem.item.id} >
                   
                   <table class="table table-striped table container Productos1">
                   

                   <tr>    
                  <th className="col-5 " scope="col" >  <div className="">{cartItem.item.title}  </div></th>                                       
                  
                  <th className="col-5 " scope="col" > <div>{cartItem.quantity} </div></th>
                  <th><button className=" col-10 bttn-unite bttn-md bttn-warning boton" onClick={()=> removeItem(cartItem.item.id)}>borrar</button></th>                 
                    </tr>
                    
                    </table>
                   
                    
                </div>)


                )}
                
                <div  class="alert alert-dark container mb-5" role="alert"> 
                <h1>
                Total: {totalItems} Unidades y ${totalPrecio} Pesos
                </h1>
                <button className="bttn-unite bttn-md bttn-danger col-2" onClick={clear}>Borrar todo</button>
                </div> 
              
                
                
               
    
                  
               
<div className="formulario ">                
<form className=" input-group-text-center container mb-5 bg-dark  formulario"  onSubmit={finalizarCompra}>
  
  <div className="container mb-5">
  <span className="input-group-text-center bttn-gradient bttn-md bttn-success" id="addon-wrapping">Nombre</span>
  <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  
  <div className="container mb-5  ">
  <span className="input-group-text-center bttn-gradient bttn-md bttn-success mb-5" id="addon-wrapping">Email</span>
  <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>

   <div className="container mb-5">
  <span className="input-group-text-center bttn-gradient bttn-md bttn-success mb-5" id="addon-wrapping">Telefono</span>
  <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  </div>
 
<div className="botonesfin">
  <div>
<button className="bttn-unite bttn-md bttn-success mb-2" type="submit"> Generar orden</button>
</div>

 </div>

 <div className="seguircomprando ">
 <button className ="bttn-unite bttn-md bttn-primary mb-5"><Link className="seguircomprando " to='/' >Seguir Comprando </Link> </button>
 </div>
</form>





</div>


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