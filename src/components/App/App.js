import './App.css';
import SumarNumeros from '../SumarNumeros';

import SaludoHijo from '../SaludoHijo';

import Matematicas from '../Matematicas';
import { forwardRef } from 'react';
import Contador from '../Contador';

function App() {

  //queremos un metodo en el parent que sea llamado desde el hijo
  const metodoPadre = (descripcion) => {
    console.log("Soy  + " + descripcion);
  }

  //Metodo del padre para comunicarse con las variables del hijo
  const tripleNumero = (valor) => {
    
    var numTriple = valor*3;
    console.log("El triple es: " + numTriple);
       
  }

  return (
    <div className="App">
      <h1>Componente App</h1>
      {/* Enviamos el metodo del padre al hijo con un nombre del props */}
      
      {/* <SaludoHijo idHijo="1" metodoPadre = {metodoPadre}/>
      <SaludoHijo idHijo="2" metodoPadre = {metodoPadre}/>
      <SaludoHijo idHijo="3" metodoPadre = {metodoPadre}/> */}


      <Matematicas numero="3" numeroTriple={tripleNumero}></Matematicas>
      
      <Contador inicio="0"></Contador>
      
    </div>
  );
}

export default App;
