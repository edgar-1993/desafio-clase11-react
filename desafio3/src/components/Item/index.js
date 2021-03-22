import React from 'react';
import img from '../../imagenes/imagen.jpg';

export const Item = ({ item }) => {
  return (
<div className="card" >
<img src={img} alt="" style={{width: "18rem"}}/>
    <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">Disfruta nuestras hamburguesas mas ricas del pais!!</p>
    <a href="#" class="btn btn-primary">${item.price}</a>
 </div>
</div>
  );
};
