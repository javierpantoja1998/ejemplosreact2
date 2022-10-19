import {useState} from 'react';

function Car(props){


    //Tendremos una variable para averiguar si el coche esta arrancado o no
    const [estado, setEstado] = useState(false);

    //Tendremos una variable para visualizar la velocidad del coche
    const [velocidad, setVelocidad] = useState(0);

    //Vamos a crear un objeto que contenga las propiedades recibidas del App.js
    var coche = {
        marca: props.Marca,
        modelo: props.Modelo,
        aceleracion: parseInt(props.Aceleracion),
        velocidadMaxima: parseInt(props.VelocidadMaxima)

    };

    //Creamos un metodo para devolver el estado del coche con un dibujo html
    const comprobarEstado = () => {
        //Si el estado esta arrancado ..
        if (estado === true) {

            return (<h1 style={{color:"green"}}>Arrancado</h1>);

            //Si el estado no esta arrancado ..
        }else{

            return (<h1 style={{color:"red"}}>Detenido</h1>);
        }
    };
    const acelerarCoche = () => {
      //Vamos a crear un metodo para acelerar el vehiculo
        if(estado === false) {
            alert("El coche esta detenido, no aceleres hombre");
            //Ponemos la velocidad a 0 ya que esta detenido
            setVelocidad(0);

        }else{
            //Si no esta detenido entonces

            //Si la velocidad es mayor o igual que la velocidad maxima...

            if(velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);

            }else{
                setVelocidad(velocidad+coche.aceleracion);
            }
    
      }
    }

    return (
        <div>
            <h1 style={{color:"fuchsia"}}>Component Car {coche.marca}, {coche.modelo}</h1>

            <div>
                {comprobarEstado()}
            </div>

           <h1>Velocidad Actual {velocidad}</h1>

            <button onClick={ () => {

                setEstado(!estado);
    
            }}>
                Arrancar/Detener
            </button>

            <button onClick={ () => acelerarCoche()}>
                Acelerar Coche
            </button>
        </div>
    )
}

export default Car;

