import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) =>{
    return(
        <div>
        <p>{props.greetings}</p>
        <ItemCount stock={10} initial={1} /> 
        </div> );

}

export default ItemListContainer;