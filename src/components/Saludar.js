function Saludar(props) {
    const { nombre, residencia, estilo, children } = props
    console.log(props.nombre)
    return (
        <div>
            <h2 className={estilo} >Hola {props.nombre} te voy a visitar en {props.residencia}</h2>
            {children}
        </div>
    )
}

export default Saludar;