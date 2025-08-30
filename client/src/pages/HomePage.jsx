import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'
import Philosophybanner from '../components/Philosophybanner/Philosophybanner'
import Whywe from '../components/Whywe/Whywe'
import NewArrival from '../components/NewArrival/NewArrival'
import Assurity from '../components/Assurity/Assurity'
import Testimonial from '../components/Testimonial/Testimonial'
import { publicRequest } from '../utils/requestMethod'
import Loader from './Loader/Loader'
const HomePage = () => {
    const [arrivals, setArrivals] = useState([]);

    useEffect(() => {
        const getArrivals = async () => {
            try {
                const res = await publicRequest.get("/newArrivals");
                setArrivals(res.data);
                // console.log(arrivals);
            } catch (error) {
                console.log("Error in getting products", error)
            }
        };
        getArrivals()
    }, [])


    return (

        <div>
            <Announcement />
            <Header />
            {
                arrivals.length !== 0 ?
                    <>
                        <Banner />
                        <NewArrival heading="New Arrivals" arrivals={arrivals} />
                        <Assurity />
                        <Products headingText="Our Products" />
                        <Philosophybanner />
                        <Whywe headTag="Our Features" />
                        <Testimonial />
                        <Footer />
                    </> : <Loader />
            }
        </div>
    )
}

export default HomePage
