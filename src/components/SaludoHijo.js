function SaludoHijo(props) {
    //Inventamos un nombre de variable para el metodo
    
    const {idHijo, metodoPadre} = props;

    return (
    <div>
        <h1>Eventos Hijo--Padre</h1>
        <button onClick = { () => metodoPadre(" Soy el hijo" + idHijo) }>
            LLamar metodo padre
        </button>
    </div>
    )
}

export default SaludoHijo;

