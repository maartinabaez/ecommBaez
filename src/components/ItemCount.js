import React from 'react'
import { useState } from 'react'

function ItemCount ({stock, initial}) {
    const [contador, setContador] = useState(initial)
    const onAdd = () =>{
       setContador(contador);
    }

    const sumar = () => {
        if (contador < stock)
        setContador (contador +1);
    }

    const restar = () => {
        if (contador > initial)
        setContador (contador -1 );
    }
    return(
        <div className='botonera'>
    <button onClick={onAdd}>Add to cart</button>
    <button onClick={sumar}> + </button>
    <button onClick={restar}> - </button>
    <h1>Contador</h1>
        </div>
    )
    }
export default ItemCount