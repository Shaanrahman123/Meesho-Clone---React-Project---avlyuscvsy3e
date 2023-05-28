import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import CreateItem from '../State/CreateItem';
import '../List/List.css';

const List = () => {
    const api = useContext(CreateItem);
    const [page, setPage] = useState(1);
    const limit = 10;
    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=${limit}&page=${page}`;

    const producturl = () => {
        axios.get(url).then((response) => {
            api.updatedata(response.data);
        });
    };

    useEffect(() => {
        producturl();
    }, [page]);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <>
            <div className="each-item-wrapper">
                {
                    api.data.map((item, id) => {
                        return (
                            <div key={`${item.id}-${page}`} className="productMain-box">
                                <Link style={{ textDecoration: 'none' }} to={`/productpage/${item.id}`}>
                                    <div className="product-box">
                                        <div className="product-img-box">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content-one">
                                                <span className="product-span">
                                                    <p className="product-title">{item.title}</p>
                                                    <div className="span-div">
                                                        <h5 className="pro-price">
                                                            ₹{item.price}
                                                            <span className="onwards">Onwards</span>
                                                        </h5>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="delivery">
                                                <div className="delivery-box">
                                                    <span className="delivery-text">
                                                        free Delivery
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rating-box">
                                                <div className="rating-content">
                                                    <span className="rating" style={{ backgroundColor: item.rating.rate >= 3.5 ? " #23bb75" : "rgb(244, 182, 25) " }}>{item.rating.rate} <FaRegStar className="star" size={15} /></span>
                                                    <span className="review">62000 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
            <div className='button-container'>
                <button
                    className={`btn-prev ${page === 1 ? 'disabled' : ''}`}
                    id='pagination-button-prev'
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <button
                    className={`btn-next ${page === 2 ? 'disabled' : ''}`}
                    id='pagination-button-next'
                    onClick={nextPage}
                    disabled={page === 2}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default List;
