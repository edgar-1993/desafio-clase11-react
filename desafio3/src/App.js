import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Home from "./components/home/index";
import imagen from "./imagenes/carro-vacio.png"

function App() {
  return (
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

<Route exact path='/cart'>
  <div>
  <img src={imagen}></img>
  </div>
</Route>



      </switch>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
