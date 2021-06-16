import './App.css';
// import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchApi from './components/FetchApi';
import ItemList from './components/ItemList';
// import Prueba from './components/Prueba'
import AppRouters from './routers/AppRouters'

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <ItemListContainer greeting = "Contador"/>
      <ItemCount/> */}
      <FetchApi/>
       {/* <ItemList/> */}
      {/* <Prueba/> */}
      {/* <AppRouters/> */}
    </div>
  );
}

export default App;
