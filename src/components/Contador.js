import {useState} from 'react';

function Contador(props) {
    const { inicio} = props;
    //Vamos a tener un metodo para ir incrementando
    //Vamos a importar la libreia de react para usar el State
    const [numero, setNumero] = useState(parseInt(inicio));

    const sumarContador = () => {
        
        //SetNombreVariables es un metodo
       setNumero(numero+1);
        
    }

    return (
        <div>
            <h1>Ejemplo de State con React</h1>
            <h2 style={{color:"blue"}}>Contador:{numero}</h2>
            <button onClick={ () => sumarContador() }>Contador</button>
            <button onClick={ () => setNumero(numero-1)  }>Contador</button>

        </div>
    )
}

export default Contador;

