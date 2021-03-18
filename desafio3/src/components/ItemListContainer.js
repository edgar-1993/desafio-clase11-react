import React from "react";
import {ItemCount} from "./ItemCount";

export default function ItemListContainer() {
    return (
      <div className="container ">
        (componente ItemListContainer)
        <ItemCount stock="10" initial="1" />
      </div>
    );
  }
  