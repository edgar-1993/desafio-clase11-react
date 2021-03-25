import React from 'react'
import img from '../../imagenes/imagen.jpg';

export default function ItemDetail({ item }) {

    return <>
     <img src={img?.img} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>
  </>;
   
  }