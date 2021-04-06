import React, { useState,useEffect} from 'react'

import ItemDetail from '../ItemDetail/index'
import {useParams} from "react-router-dom";


import products from "../products/products";


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {

        resolve (products.find((product) => product.id === parseInt(itemId)));
    }, 2000)
    );
    promesa.then((product) => {
    setItem(product);
    });
    },);


    return <> { itemId}
     <ItemDetail item={item} /></>/* JSX que devuelva un ItemDetail*/}
    
