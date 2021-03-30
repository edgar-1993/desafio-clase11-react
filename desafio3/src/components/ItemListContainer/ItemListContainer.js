import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/index";
import {useParams} from "react-router-dom" 
import img from '../../imagenes/imagen.jpg';



export default function ItemListContainer() {
  const [items, setItems] = useState([])

const {categoryId} = useParams()

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Hamburguesa 1", price:700, Url:"" },
          { id:2, title:"Hamburguesa 2", price:800, pictureUrl:"https://"},
          { id:3, title:"Hamburguesa 3", price:850, pictureUrl:"https://"},
          { id:4, title:"Hamburguesa 4", price:900, pictureUrl:"https://"},
          { id:5, title:"Hamburguesa 5", price:950, pictureUrl:"https://"},
          { id:6, title:"Hamburguesa 6", price:1000, pictureUrl:"https://" }
        ])
      },3000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">
      Items de la catedogia{categoryId}

      <ItemList items={items}/>
      <ItemCount stock="10" initial="1" />
    </div>
  );
}
  