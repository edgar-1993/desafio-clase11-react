import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index";
import {BrowserRouter, Switch,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <switch >
       
       <Route exact path= '/'>
         ESTE ES EL HOME
       </Route>
       
       <Route path='/category/:categoryId'>
       <ItemListContainer/>
       </Route>
       
        <Route path='/item/:itemId'>
        <ItemDetailContainer />
       </Route>

      </switch>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
