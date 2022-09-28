import React from 'react';
import ItemCount from './ItemCount';
import customFetch from '../utils/customFetch';
import { useState, useEffect } from 'react';
import products from '../utils/products';
import ItemList from './ItemList';

const ItemListContainer = (props) =>{
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        customFetch(products)
        .then(data => setListProducts(data))
    },[]
    )

    return(
        <div>
        <p>{props.greetings}</p>
        <div><ItemList listProducts={listProducts}></ItemList></div>
        <ItemCount stock={10} initial={1} /> 
        </div> 
        );

}

export default ItemListContainer;