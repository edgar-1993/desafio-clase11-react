import React, { useState,useEffect} from 'react'

import ItemDetail from '../ItemDetail/index'
import {useParams} from "react-router-dom";


const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: "un item",
                price: 700,
                description: "esto es la descripcion del item",
                img: ""


            })
        }, 2000)

    })
}

export default function ItemDetailContainer() {
    const [item,setItem] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getItems().then((res)=>setItem(res))
    },[])

    return <ItemDetail item={item} />

}