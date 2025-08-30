import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import './Products.css'
import { motion } from 'framer-motion';
import { publicRequest } from "../../utils/requestMethod";
import Loader from '../../pages/Loader/Loader';
// import axios from "axios";

const Products = ({ cat, filters, headingText, innerpage, relatedProducts }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat ? `products?category=${cat}` : "/products");
                setProducts(res.data);
                // console.log(products);
            } catch (error) {
                console.log("Error in getting products", error)
                // res.error(error)
            }
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)))
        )
    }, [products, cat, filters]);

    return (
        <div className="products-container" >
            {!innerpage && <motion.div className="sec-heading"
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
            >{headingText}</motion.div>}
            <div className="products">
                {!relatedProducts ? (products.length !== 0) ? (cat ? filteredProducts.map((item) => (
                    <Product item={item} key={item._id} />
                )) : products.slice(0, 8).map((item) => (
                    <Product item={item} key={item._id} />
                ))) : <div><Loader /></div> :
                    relatedProducts.map((item) =>
                        <Product item={item} key={item._id} />
                    )
                }
            </div>
        </div>
    )
}

export default Products
