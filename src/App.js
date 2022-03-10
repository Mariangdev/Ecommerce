import CartWidget from './components/CartWidget';
import Sidebar from './components/NavBar';
import Tittle  from './components/titulo';
import "./components/styles/App.css";
import Welcome from './components/ItemListContainer';
import "./components/styles/App.css"
function App() {
  return (
    <div className="Header">
      <Tittle />
      <Sidebar />  
      <div className='Logo'>
      <CartWidget/>
      
      </div>
    </div>
  );

}

function ItemListContainer () { 
  return (
    <div className="App">
    <Welcome name="John"/>
  </div>
   
  );
}
export default App;
