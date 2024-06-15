import { useEffect, useState } from "react"

const ItemListContainer = ({ categoria}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                let response;
                if (categoria === 'todos') {
                    response = await fetch('https://fakestoreapi.com/products');
                } else {
                    response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
                }
                const json = await response.json();
                setProducts(json);
            } catch (e) {
                console.error(e);
            }
        };

        fetchProducts();
    }, [categoria]);

    return (
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
    )
}

export default ItemListContainer