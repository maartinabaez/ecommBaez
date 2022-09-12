import React from 'react'

function ItemCount ({stock, initial, onAdd}) {
    const [stock, setStock] = useState(0)
    const itemAdd = () =>{
        setStock(stock+1);
    }
    return(
    <buttom onAdd={itemAdd}>Add to cart</buttom>
    )
    }
export default ItemCount