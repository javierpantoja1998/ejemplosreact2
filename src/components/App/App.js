import './App.css';
import SumarNumeros from '../SumarNumeros';

function App() {
  return (
    <div className="App">
      <h1>Componente App</h1>
      <SumarNumeros numero1="5" numero2="4"/>
      <SumarNumeros numero1="13" numero2="14"/>
    </div>
  );
}

export default App;
