import React from 'react'
import { Item } from "../Item/index"

export const ItemList = ({items=[]}) => {


    return (
        <div className="flex">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}
