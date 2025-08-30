import React, { useState } from 'react'
import "./OrderModelBox.css"
import { MdClear } from "react-icons/md";

const OrderModelBox = ({ order }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };
    return (
        <div>
            <p title='View user Details' style={{ textDecorationLine: 'underline', cursor: 'pointer' }} onClick={handleShow}>{order.userId}</p>
            {showModal && (
                <div className="modal">
                    <div className="hide-model">
                        <button type="button" className="cancelbtn" onClick={handleClose}>
                            <MdClear size={18} />
                        </button>
                    </div>
                    <div className="modal-inner">
                        <h2>User Details</h2>
                        <p><strong>Name:</strong> {order.userName}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderModelBox