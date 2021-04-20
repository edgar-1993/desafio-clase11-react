import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/index";
import {useParams} from "react-router-dom" 

import products from '../products/products'
import {getFirestore} from "../firebase/index"



export default function ItemListContainer() {
  const [items, setItems] = useState([])

const {categoryId} = useParams()

  /* IMPORTANTE  aca se filtra por categoria sino,,me muestra todas  las catedorias */ 
useEffect(() => {
  let filtrado
  const db = getFirestore();
  //filtro por categorias
  const itemsCollection = db.collection('items') 
  if(categoryId){ filtrado = itemsCollection 
    .where('categoria','==', categoryId).limit(6)

  } else { filtrado = itemsCollection;

  }
   
       const prom = filtrado.get();

      //snaptshot es como pedir una imagen de los datos
  prom.then((snaptshot) => {
    console.log(' se consultaron los datos');
    console.log(snaptshot);

    if (snaptshot.size > 0) {
      console.log(snaptshot.docs.map(doc => doc.data()));

      console.log(snaptshot.docs.map(doc => doc.id))

      
      setItems(snaptshot.docs.map(doc => {
        return {id:doc.id, ...doc.data()}
      }))
    }
      //setItems(resultado);
  })
},[categoryId])

return (

  <div className="container ">
  <h1 className="text-4xl capitalize font-medium px-12 my-4">   <spam className="text-4xl capitalize text-purple-500">{categoryId}</spam></h1>
      <ItemList items={items}/>
  </div>
);
}

  