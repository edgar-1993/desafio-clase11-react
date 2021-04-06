import imgcarne1 from '../../imagenes/carne1.jpeg';
import imgcarne2 from '../../imagenes/carne2.jpg';
import imgvege1 from '../../imagenes/vege1.jpeg';
import imgvege2 from '../../imagenes/vege2.jpg';
import imgvegano1 from '../../imagenes/vegano1.jpg';
import imgvegano2 from '../../imagenes/vegano2.jpg';


const productos = [
    { id:1, category:"carne", title:"Hamburguesa carne 1", price:700, img:imgcarne1},
          { id:2, category:"carne" ,title:"Hamburguesa carne 2", price:800, img:imgcarne2},
          { id:3, category:"vegetariano" ,title:"Hamburguesa vegetariano 1", price:850, img:imgvege1},
          { id:4, category:"vegetariano" ,title:"Hamburguesa vegetariano 2", price:900, img:imgvege2},
          { id:5, category:"vegano" ,title:"Hamburguesa vegano 1", price:950, img:imgvegano1},
          { id:6, category:"vegano", title:"Hamburguesa vegano 2", price:1000,img:imgvegano2 }
];

export default productos;
