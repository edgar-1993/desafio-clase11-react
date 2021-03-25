import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
