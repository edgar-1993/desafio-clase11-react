import React from 'react';
import img from '../../imagenes/imagen.jpg';
import '../styles/Item.css'
import { Link } from 'react-router-dom';



export const Item = ({ item }) => {
  return (

    <div className="cartas ">
      <div className="p-1card col-sm-10 mb-5 divcard shadow-lg bg-white rounded  " >
        <img src={item.imagen} alt="" style={{ width: "100%" }} />
        <div className="card-body  ">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">${item.price}</p>
          <Link to={`/item/${item.id}`} > <a href="#" className="btn bttn-unite bttn-md bttn-success">Comprar</a></Link>


        </div>
      </div>
    </div>

  );
};
