import React, { useEffect, useState } from 'react'
import './Customers.css'
import Header from '../../components/Header/Header'
import { publicRequest } from '../../utils/requestMethod';
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Modal from '../../components/ModalBox/ModalBox';
import CryptoJS from 'crypto-js';

const secretKey = 'ankit';
const Customers = () => {

    const [show, setShow] = useState(false);
    console.log(show);
    const handleClose = () => {
        setShow(false);
    };

    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await publicRequest.get('/users');
                setUsers(res.data);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
                // }
            }
        }
        getUsers();
    }, [])


    const handleDelete = async (id) => {
        try {
            await publicRequest.delete(`/users/${id}`);
            setUsers(users.filter((user) => user._id !== id));
            toast.success("User deleted successfully...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "dark",

            });
        } catch (error) {
            console.log(error);
        }
    };

    // Edit product
    const handleEdit = (u) => {
        setEditing(u._id);
        setUpdatedUser(u);
    };

    // Update product
    const handleUpdate = async () => {
        try {
            await publicRequest.put(`/users/${editing}`, updatedUser);
            setUsers(users.map((u) => u._id === editing ? updatedUser : u));
            setEditing(null);
            toast.success("User updated successfully...", {
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
            <div className="main-container">
                {users.length !== 0 ?
                    <>
                        <h3>USER DETAILS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO.</th>
                                    <th>User Id</th>
                                    <th>User name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Password</th>
                                    <th>isAdmin</th>
                                    <th>CreatedAt</th>
                                    <th>Edit/Dlt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (

                                        <tr key={user._id} style={{ textAlign: "center" }}>
                                            <td>{index + 1}</td>
                                            <td>{user._id}</td>
                                            {
                                                (editing === user._id) ?
                                                    (
                                                        <>
                                                            <td><input type="text" defaultValue={user.username} onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })} /></td>
                                                            <td><input type="text" defaultValue={user.email} onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })} /></td>
                                                            <td><input type="text" defaultValue={user.phone} onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })} /></td>
                                                            <td>{CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8)}</td>
                                                            <td><input type="text" defaultValue={user.isAdmin} onChange={(e) => setUpdatedUser({ ...updatedUser, isAdmin: e.target.value })} /></td>
                                                        </>
                                                    ) :
                                                    <>
                                                        <td><strong>{user.username}</strong></td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>
                                                            {CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8)}

                                                        </td>
                                                        <td>{user.isAdmin === true ? 'true' : 'false'}</td>
                                                    </>
                                            }

                                            <td>{new Date(user.createdAt).toLocaleString()}</td>
                                            <td>
                                                <div className="btn-container">
                                                    {editing === user._id ? (
                                                        <button className='update-btn' onClick={handleUpdate}>UPDATE</button>
                                                    ) : (
                                                        <>
                                                            <FaEdit size={18} onClick={() => handleEdit(user)} title="Edit User" />

                                                            <Modal onClose={handleClose} ankit={'Delete User'
                                                            } details={'Are you sure you want to delete this account?'} btn={<button className="deletebtn" onClick={() =>
                                                                handleDelete(user._id)}>Delete</button>}>

                                                            </Modal>
                                                        </>
                                                    )}

                                                </div>
                                            </td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                    : <div className="loader"></div>}
            </div >
        </>
    )
}

export default Customers