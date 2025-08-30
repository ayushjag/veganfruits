import React, { useState } from 'react';
import './ModalBox.css'
import { MdDelete } from 'react-icons/md'
const Modal = ({ ankit, btn, details }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };

    return (
        <div>
            <MdDelete size={18} onClick={handleShow} title="Delete Item" />
            {showModal && (
                <div className="modal">
                    <div className="modal-inner">
                        <div className="text-content">
                            <h1>{ankit}</h1>
                            <span>
                                {details}
                            </span>
                        </div>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn" onClick={handleClose}>Cancel</button>
                            {btn}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;