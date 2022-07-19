import logo from './logo.svg';
import Kike from './yo.jpeg';
import './App.css';
import Saludar from './components/Saludar'

function App() {
  const nombre = "Kike"
  let apellido = "Orta"
  var edad = 28
  const direccion = {
    calle: "Lorimer",
    pais: "USA"
  }

  function holaMundo(){
    alert("Adios MUNDO")
  }

  const adiosMundo = () => {
    alert("Adios MUNDO")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Kike} className="App-logo" alt="logo" onClick={holaMundo}/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Me llamo {nombre.toUpperCase()} 
          <br/>
          Tengo {edad} y vivo en {direccion.calle} en {direccion.pais}
        </a>
        <Saludar nombre="Yanni" residencia="San Antonio" estilo="rojo"/>
        <p>Soy el hijo/children del componente saludar</p>
      </header>
    </div>
  );
}

export default App;
