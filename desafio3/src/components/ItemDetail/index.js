import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import '../styles/Item.css'


export default function ItemDetail({ item }) {
    console.log(item)

    const [count, setCount] = useState (0)
    
    const addHandle = (contador)=>{
        console.log('se agrego producto',contador)
        setCount(contador)
    }

    return <>
    --{count}
    <div className="card col-sm-4 mb-5" >
<img src={item.img} alt="" style={{width: "100%"}}/>
    <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">${item.price}</p>
    
 </div>
</div>

<div className="">
            { count == 0 ?
            <ItemCount stock="10" initial="1" onAdd={addHandle} />
                :
              <Link to='/cart'>  
             <button class="bttn-gradient bttn-md bttn-primary">Terminar mi compra</button>
              </Link>
            }
            
            </div>
  </>;
  }

  