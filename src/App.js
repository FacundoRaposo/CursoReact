import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/nav-bar/nav-bar';
import ContainerList from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/itemDetailContainer'

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    
    </div>
    <div className="container-fluid">
        <ContainerList name="Red Sport" />
    </div>
    <div className="container-fluid">
    <ItemDetailContainer />
    </div>


    </>
  );
}

export default App;
