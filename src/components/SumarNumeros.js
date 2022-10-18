import imagen from './../assets/images/imagenSumarNumeros.jpg';

function SumarNumeros(props) {
    const sumarNumeros = (num1, num2) => {
        //var suma = num1 + num2;
        num1 = parseInt(props.numero1);
        num2 = parseInt(props.numero2);
        var suma = num1 + num2;
        console.log("La suma es " + suma);
        return suma;
    }
    var imageSize = {
        width: "600px", height: "400px"
    };
    return (<div>
        <h1>Componente SumarNumeros</h1>
        <img style={imageSize} src={imagen}/>
        <br/>
        <button onClick={() => sumarNumeros()}>Sumar</button>
        
    </div>);
}

export default SumarNumeros;