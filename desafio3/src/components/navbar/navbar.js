import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import img from '../../imagenes/Logo.png';



export const NavBar = () => {
    return (

   <nav className="menu navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to='/' class="navbar-brand ">  <img classname="logo" src={img}></img> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link to='/' className="nav-link active colorlink" aria-current="page">Home </Link>
        
      <Link to={`/category/vegetarianas`} className="nav-link colorlink" href="#">Vegetarianas cat1</Link>
        
      <Link to={`/category/carnes`} className="nav-link colorlink" href="#">Carnes cat2</Link>

      <Link to={`/category/veganos`} className="nav-link colorlink " href="#">Veganos cat3</Link>


     <Link to={`/Cart`}>
     <div><CartWidget /> </div>
     </Link> 
      

</div>
      
      
                
    </div>
   
  </div>
</nav>

     );

    };

    <Link></Link>