import {useState} from 'react';

function Matematicas(props) {

    
    
    var num = props.numero;
    var tripleNumero = props.numeroTriple;
    
    const { inicio} = props;
    const [numero, setNumero] = useState(parseInt(inicio));
  
    //Metodo para multriplicar el numero x2
    const dobleNumero = () => {
        //Recogemos el numero del padre que viene en App.js en <Matematicas numero="3">
        var numeroDoble = parseInt(props.numero)*2;
        console.log("El doble del numero es: " + numeroDoble);

    }

    

    return (
        <div>
            <button onClick={() => dobleNumero()}>Calcular doble</button>
            <button onClick={() => tripleNumero(num)}>Calcular triple</button>
        </div>
    );
}

export default Matematicas;
