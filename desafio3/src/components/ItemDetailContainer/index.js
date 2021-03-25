import React, { useState,useEffect} from 'react'

import ItemDetail from '../ItemDetail/index'

const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: "un item",
                price: 700,
                description: "esto es descripcion item",
                img: ""


            })
        }, 2000)

    })
}

export default function ItemDetailContainer() {
    const [item,setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=>setItem(res))
    },[])

    return <ItemDetail item={item} />

}