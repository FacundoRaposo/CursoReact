import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/nav-bar/nav-bar';
import ContainerList from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/itemDetailContainer'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <NavBar />
      <switch>
        <Route path ="/home">
          <div>
          <h1>Bienvenidos a la Pagina de Red Sport</h1>
          <ContainerList />
          </div>
        </Route>
      
    <Route path="/category/:categoryId">
        <ContainerList name="Red Sport" />
    </Route>
    <Route path="/item/:itemId">
    <ItemDetailContainer />
    </Route>
    <Route path='*'>
            
    </Route>
    </switch>
    </div>
    </BrowserRouter>



  );
}

export default App;
