import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { BsFillArchiveFill, BsPeopleFill, BsFillCartFill } from 'react-icons/bs'
import { FaRupeeSign } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { publicRequest } from '../../utils/requestMethod';

const Main = () => {

    function convert(value) {
        if (value >= 1000000) {
            value = (value / 1000000) + "M"
        }
        else if (value >= 1000) {
            value = (value / 1000) + "K";
        }
        return value;
    }

    const [stats, setStats] = useState([]);
    const [orders, setOrders] = useState([]);
    const [income, setIncome] = useState([]);
    const [products, setProducts] = useState([]);

    const getStats = async () => {
        try {
            const res = await publicRequest.get('/users/stats');
            setStats(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getOrders = async () => {
        try {
            const res = await publicRequest.get('/orders/stats');
            setOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getIncome = async () => {
        try {
            const res = await publicRequest.get('/orders/income');
            setIncome(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getProducts = async () => {
        try {
            const res = await publicRequest.get('/products/stats');
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStats();
        getOrders();
        getIncome();
        getProducts();
    }, [])


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <>
            {
                products.length === 0 ? <div className="loader"></div> :

                    <div className='main-container'>
                        <div className="main-title">
                            <h3>DASHBOARD</h3>
                        </div>
                        <div className="main-cards">
                            <div className="card">
                                <div className="card-inner">
                                    <h3>PRODUCTS</h3>
                                    <BsFillArchiveFill className='card_icon' />
                                </div>
                                {
                                    products.map((p) =>
                                        <h1 key={p._id}>{p.total}</h1>
                                    )
                                }
                            </div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3>ORDERS</h3>
                                    <BsFillCartFill className='card_icon' />
                                </div>
                                {
                                    orders.map((o) =>
                                        <h1 key={o._id}>{o.total}</h1>
                                    )
                                }
                            </div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3>USERS</h3>
                                    <BsPeopleFill className='card_icon' />
                                </div>
                                {
                                    stats.map((s) =>
                                        <h1 key={s._id}>{s.total}</h1>
                                    )
                                }
                            </div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3>INCOMES</h3>
                                    <FaRupeeSign className='card_icon' />
                                </div>
                                {
                                    income.map((i) =>
                                        <h1 key={i._id}>{convert(i.total)}</h1>
                                    )
                                }
                            </div>
                        </div>

                        <div className="charts">
                            <div className="charts-bar">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="charts-bar">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>}
        </>
    )
}

export default Main