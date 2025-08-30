
import './Search.css';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


function Search() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`https://vegan-food-012z.onrender.com/api/products/search?q=${query}`);
                setResults(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [query]);

    return (
        <>
            <div className="search-box">
                <input type="text" placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button>
                    {
                        !query ? <SearchIcon /> : <CloseIcon onClick={() => setQuery("")} />
                    }

                </button>
            </div>

            <div className='search-results'>
                {
                    query && results.length === 0 ? (
                        <h1 className='not-found'>result not found "{query}"</h1>
                    ) :
                        (query) && results.map((item) => (
                            <div className='items' key={item._id}
                                onClick={() => { navigate("/product/" + item._id) }}
                            >
                                <div className="img-container">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="item-desc">
                                    <span className="name">{item.title}</span>
                                    <span className="desc">{item.desc}</span>
                                </div>
                            </div>
                        ))}
            </div>

        </>

    )
}

export default Search