import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/index"



export default function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Hamburguesa1", price:700, pictureUrl:"https://" },
          { id:2, title:"Hamburguesa2", price:800, pictureUrl:"https://"},
          { id:3, title:"Hamburguesa3", price:900, pictureUrl:"https://" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">

      <ItemList items={items}/>
      <ItemCount stock="10" initial="1" />
    </div>
  );
}
  