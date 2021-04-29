import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Home from "./components/home/index";
import imagen from "./imagenes/carro-vacio.png";
import {CartProvider} from "./components/context/CartContext";
import {Cart} from './components/Cart/cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <switch >
       
       <Route exact path= '/'>
         <Home/>
       </Route>
       
       <Route path='/category/:categoryId'>
       <ItemListContainer/>
       </Route>
       
        <Route path='/item/:itemId'>
        <ItemDetailContainer />
       </Route>

<Route path='/Cart'>
  <h1>Tu carrito</h1>
  <Cart/>
  
</Route>



      </switch>
      
      
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
