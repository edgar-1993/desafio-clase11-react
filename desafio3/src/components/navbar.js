import React from "react";
import CartWidget from "./CartWidget";


export const NavBar = () => {
    return (

   <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand bg-success" href="#">Hamburgueseria EDGAR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Vegetarianos</a>
        <a class="nav-link" href="#">vegano</a>
        <a class="nav-link" href="#">carnes</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Volver</a>
      </div>
      <CartWidget/>
      
    </div>
  </div>
</nav>

     );

    };

    

