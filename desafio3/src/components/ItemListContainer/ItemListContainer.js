import React, { useEffect, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {ItemList} from "../ItemList/index";
import {useParams} from "react-router-dom" 

import products from '../products/products'



export default function ItemListContainer() {
  const [items, setItems] = useState([])

const {categoryId} = useParams()

/* aca se filtra por categoria sino,,me muestra todas  las catedorias*/ 
useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
      if (categoryId) {
          const productsFilter = products.filter((product) => {
              return product.category.toString() === categoryId;
          });
          resolve(productsFilter);
      } else resolve(products);
      resolve(products);
      }, 2000);
  });
  promesa.then((resultado) => {
      setItems(resultado);
  });
});

return (

  <div className="container ">
  <h1 className="text-4xl capitalize font-medium px-12 my-4">   <spam className="text-4xl capitalize text-purple-500">{categoryId}</spam></h1>
      <ItemList items={items}/>
  </div>
);
}

  