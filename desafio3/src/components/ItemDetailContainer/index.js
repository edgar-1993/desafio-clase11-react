import React, { useState,useEffect} from 'react'

import ItemDetail from '../ItemDetail/index'
import {useParams} from "react-router-dom";

import products from "../products/products";
import {getFirestore} from "../firebase/index"

const getItems = (id) => { /* Esta función debe retornar la promesa que resuelva con delay */ 
    const db = getFirestore();
    const itemsCollection = db.collection('items')
    
    const item = itemsCollection.doc(id) 
    return item.get();
}


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        getItems(itemId)
        .then((res)=> {
            console.log('existe?', res.exists);
            if  (res.exists){
                setItem(res.data())
            }
        })
        return;
    }, [itemId])



    return <> { itemId}
     <ItemDetail item={item} /></>/* JSX que devuelva un ItemDetail*/}
    
