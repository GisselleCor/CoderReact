import React, { useEffect, useState } from "react";

const ItemDetailContainer =({ idProduct }) => {
    const [product, setProducts] =useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(e => console.error(e))
    },[idProduct])

    return (
        <div>{product?.title}</div>
    )
}

export default ItemDetailContainer