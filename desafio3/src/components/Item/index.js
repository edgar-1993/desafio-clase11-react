import React from 'react';
import img from '../../imagenes/imagen.jpg';
import '../styles/Item.css'
import {Link} from 'react-router-dom';



export const Item = ({ item }) => {
  return (
<div className="cartas">
<div className="card col-sm-4 mb-5" >
<img src={img} alt="" style={{width: "100%"}}/>
    <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">${item.price}</p>
    <a href="#" className="btn btn-dark">Comprar</a>
 </div>
</div>
<Link to={`/item/${item.title}`}> Link al item</Link>
</div>

  );
};
