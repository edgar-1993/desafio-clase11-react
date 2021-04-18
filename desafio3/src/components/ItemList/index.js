import React from 'react'
import { Item } from "../Item/index"
import "../styles/itemlist.css"


export const ItemList = ({items=[]}) => {


    return (
        <div className="card-item">
            {items.map(item => <Item key={item.id} item={item}/> )}
        </div>
    )
}
