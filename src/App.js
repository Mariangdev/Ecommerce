import CartWidget from './components/CartWidget';
import Sidebar from './components/NavBar';
import Tittle  from './components/titulo';
import "./components/styles/App.css";
import Welcome from './components/ItemListContainer';
import "./components/styles/App.css"
import CounterFunctional from "./components/ItemCount";

function App() {
  return (
    <div className="Header">
      <Tittle />
      <nav >
      <Sidebar />  
      <CounterFunctional/>

      </nav>
      <div className='Logo'>
      <CartWidget/>
      
      </div>
       </div>
  
  );

}
 
export default App;
