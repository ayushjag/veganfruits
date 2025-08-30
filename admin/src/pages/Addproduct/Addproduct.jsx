import React from 'react'
import './Addproduct.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { publicRequest } from '../../utils/requestMethod';
import { addProduct } from '../../redux/apiCalls';
import Header from '../../components/Header/Header';
import { toast } from 'react-toastify'

const Addproduct = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();


    // const handleClick = (e) => {
    //     e.preventDefault();
    //     addProducts();
    // }
    const addProducts = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post('/products', { title, desc, img, categories, qty, price });
            // console.log(res);
            if (res.data) {
                addProduct(dispatch, { title, desc, img, categories, qty, price });
                clearFields();
                toast.success("Product created successfully...", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "dark",
                })
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }



    const clearFields = () => {
        setTitle("");
        setDesc("");
        setImg("");
        setQty("");
        setPrice("");
        setCategories([]);
    }




    return (
        <div>
            <Header />
            <div className="admin">
                <div className="admin-container">
                    <h2>CREATE PRODUCT</h2>
                    <form onSubmit={addProducts}>
                        <input type="text" id='title' placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <input type="text" id='desc' placeholder="Product Description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
                        <input type="text" id='img' placeholder=" Product Img" value={img} onChange={(e) => setImg(e.target.value)} required />
                        <input type="text" id='categories' placeholder="Product Categories" value={categories} onChange={(e) => setCategories(e.target.value)} required />
                        <input type="number" id='qty' placeholder="Product Qty" value={qty} onChange={(e) => setQty(e.target.value)} required />
                        <input type="number" id='price' placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        <button >PUSH PRODUCT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
