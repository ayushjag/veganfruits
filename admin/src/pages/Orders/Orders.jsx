

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { publicRequest } from '../../utils/requestMethod';
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Modal from '../../components/ModalBox/ModalBox';
import OrderModelBox from '../../components/OrderModelBox/OrderModelBox';

const Orders = () => {
    const [show, setShow] = useState(false);
    console.log(show);
    const handleClose = () => {
        setShow(false);
    };
    const [orders, setOrders] = useState([]);
    const [editing, setEditing] = useState(null);
    const [updatedOrder, setUpdatedOrder] = useState({});
    console.log(orders);
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await publicRequest.get('/orders');
                setOrders(res.data);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
                // }
            }
        };
        getOrders();
    }, []);

    // Edit order
    const handleEdit = (order) => {
        setEditing(order._id);
        setUpdatedOrder(order);
    };

    // Update order
    const handleUpdate = async () => {
        try {
            await publicRequest.put(`/orders/${editing}`, updatedOrder);
            setOrders(orders.map((order) => order._id === editing ? updatedOrder : order));
            setEditing(null);
            toast.success("Order updated successfully...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "dark",

            });

        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await publicRequest.delete(`/orders/${id}`);
            setOrders(orders.filter((order) => order._id !== id));
            toast.success("Order deleted successfully...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "dark",

            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <div className="main-container" style={{ overflowX: 'auto' }}>
                {orders.length !== 0 ?
                    <>
                        <h3>ORDER DETAILS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO.</th>
                                    <th>OrderID.</th>
                                    <th>UserID</th>
                                    <th>ProductID</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date/Time</th>
                                    <th>Edit/Dlt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => {
                                    const createdAt = new Date(order.createdAt);
                                    const today = new Date();
                                    const isToday = createdAt.getDate() === today.getDate() &&
                                        createdAt.getMonth() === today.getMonth() &&
                                        createdAt.getFullYear() === today.getFullYear();
                                    return (
                                        <tr key={order._id} style={{ textAlign: "-webkit-center" }} >
                                            <td >{orders.indexOf(order) + 1}</td>
                                            <td >{order._id}</td>
                                            <td>
                                                <OrderModelBox order={order}>{order.userId}</OrderModelBox>
                                            </td>
                                            {
                                                order.products.length > 1 ? (
                                                    <>
                                                        <td style={{ padding: "0 2px" }}>{
                                                            order.products.map((product) =>
                                                                <tr style={{ margin: "auto" }} key={product._id} >
                                                                    {order.products.indexOf(product) + 1 + '. '}
                                                                    {product._id}
                                                                </tr>
                                                            )}
                                                        </td>
                                                        <td >{
                                                            order.products.map((product) =>
                                                                <tr key={product.quantity}>{product.quantity}</tr>
                                                            )
                                                        }</td>
                                                    </>
                                                ) :
                                                    <>
                                                        <td key={order.products[0]._id}>{order.products[0]._id}</td>
                                                        <td key={order.products[0].quantity}>{order.products[0].quantity}</td>
                                                    </>
                                            }
                                            <td >{order.amount}</td>
                                            {
                                                (editing === order._id) ?
                                                    (
                                                        <td>
                                                            <input type="text" value={updatedOrder.status} onChange={(e) => setUpdatedOrder({ ...updatedOrder, status: e.target.value })} />
                                                        </td>
                                                    ) :
                                                    <td>{order.status}</td>
                                            }
                                            <td>{isToday ? 'Today' : createdAt.toDateString()} , {createdAt.toLocaleTimeString()}</td>
                                            {/* <td>{new Date(order.createdAt).toDateString() + ' , ' + new Date(order.createdAt).toLocaleTimeString()}</td> */}
                                            <td>
                                                <div className="btn-container">
                                                    {
                                                        editing === order._id ? (
                                                            <button className='update-btn' onClick={handleUpdate}>UPDATE</button>
                                                        ) : (
                                                            <>
                                                                <FaEdit size={18} onClick={() => handleEdit(order)} title="Edit Order" />
                                                                <Modal onClose={handleClose} ankit={'Delete Order'
                                                                } details={'Are you sure you want to delete this order?'} btn={<button className="deletebtn" onClick={() =>
                                                                    handleDelete(order._id)}>Delete</button>}>
                                                                </Modal>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            </td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                    : <div className="loader"></div>}
            </div>
        </>
    );
};

export default Orders;