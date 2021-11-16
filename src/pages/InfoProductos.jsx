import React from 'react'


const InfoProductos = () => {
    return (
        <div>
            <h1>Productos</h1>
            <div className = "formulario">
                <form>
                <label>Identificador</label>
                    <input className = "appearance-none focus outline:none" type = "number" placeholder  = "Digite el identificador" required/> 
                    <label>Descripción</label>
                    <input type = "text" placeholder  = "Digite la descripcion" required /> 
                    <label>Valor unitario</label>
                    <input className = "appearance-none focus outline:none" type = "number" placeholder  = "Digite el valor del producto" required/> 
                    <label>Estado</label>
                    <input type = "text" placeholder  = "Digite si esta o no disponible" required /> 
                </form>

            </div>
        </div>
    )
}

export default InfoProductos
