import React, { useState } from "react";
import "../styles/itemcount.css";

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };

  return (
    <div className="contador1">
      <div className="w-25 flex-column align-items-strech contador2">
        <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center border-secondary border rounded contador3">
          <button
            disabled={count <= 0}
            className="bttn-gradient bttn-md bttn-success  shadow-lg bg-white rounded"
            type="button"
            onClick={removeHandle}
          >
            -
          </button>
          <div>{count}</div>
          <button
            disabled={count >= stock}
            className="bttn-gradient bttn-md bttn-success  shadow-lg bg-white rounded"
            type="button"
            onClick={addHandle}
          >
            +
          </button>
        </div>
        <button
          className="bttn-unite bttn-md bttn-success  shadow-lg bg-white rounded"
          type="button"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
