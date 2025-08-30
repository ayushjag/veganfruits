import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../utils/requestMethod';
import Products from '../../components/Products/Products';
import Loader from '../Loader/Loader';

const RelatedProducts = ({ productId, categoryId }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products?category=${categoryId}`);
                const filteredProducts = res.data.filter((product) => product._id !== productId);
                setProducts(filteredProducts);
            } catch (error) {
                console.log("Error in getting products", error)
            }
        };
        getProducts()
    }, [categoryId, productId]);
    return (
        <div className="related-product">
            {
                products.length !== 0 ? (
                    <Products headingText="Related Product" relatedProducts={products} />
                ) : <Loader />
            }
        </div>
    );
};

export default RelatedProducts;