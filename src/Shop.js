import React, { useState, useEffect } from 'react'
import './shop.css'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Card from './Card';
const Shop = () => {
    const { isAuthenticated } = useAuth0();
    const instance = axios.create({
        baseURL: "https://quickflipbackend.herokuapp.com"
    })
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await instance.get("/details");
            setData(req.data);
        }

        fetchData();
    }, [])

    return (
        isAuthenticated &&(
        <>
        
            <div className="container">
                {
                    data.map((userInfo) => (
                        <Card
                            userName={userInfo.username}
                            dateOfPost={userInfo.dateOfPost}
                            imageUrl={userInfo.imageUrl}
                            productName={userInfo.productName}
                            productDescription={userInfo.productDescription}
                            productCategory={userInfo.productCategory}
                            productPrice={userInfo.productPrice}
                            prodAddress={userInfo.prodAddress}
                        />
                    ))
                }
            </div>
        </>
        )

    )
}
export default Shop
// {"username":"demo",
// "dateOfPost":"March",
// "imageUrl":"image",
// "productName":"demo Product",
// "productDescription":"This is something",
// "productCategory":"Kids",
// "productPrice":"100",
// "productAddress":"Pune"}

