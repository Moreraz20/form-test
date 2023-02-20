
import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';

function App() {

  return (
    <div className = "App">
      
      <Header/>

      <div className="generalContainer">
        <div className='search-filter'>

          <Formulario/>
          <Buscador/>
          <button className='button'>Enviar</button>
          
        </div>
          
        </div>

    </div>
  );
}

export default App;
