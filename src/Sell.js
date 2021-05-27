import React, { useState } from 'react'
import axios from "axios";
import './sell.css'
import { useAuth0 } from '@auth0/auth0-react';


const Sell = () => {
    const { isAuthenticated, user } = useAuth0();

    const [loading, setLoading] = useState(false);
    const [username, setUserName] = useState(user.name);
    const [imageUrl, setImageUrl] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productAddress, setProductAddress] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [dateOfPost, setDateOfPost] = useState('');

    const setName = (event) => {
        console.log(event.target.value);
        setProductName(event.target.value);
    }
    const setDescription = (event) => {
        console.log(event.target.value);
        setProductDescription(event.target.value);
    }
    const setCategory = (event) => {
        console.log(event.target.value);
        setProductCategory(event.target.value);
    }
    const setPrice = (event) => {
        console.log(event.target.value);
        setProductPrice(event.target.value);
    }
    const setAddress = (event) => {
        console.log(event.target.value);
        setProductAddress(event.target.value);
    }
    const setDate = (event) => {
        console.log(event.target.value);
        setDateOfPost(event.target.value);
    }

    const instance = axios.create({
        baseURL: "http://localhost:8000"
    })


    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'imagesfolder')
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/koushik310301/image/upload', {
            method: 'POST',
            body: data
        })

        const file = await res.json();

        console.log(file);
        setImageUrl(file.secure_url)
        setLoading(false)
    }

    const sendData = () => {

        instance.post('/insert', {
            username: username,
            dateOfPost: dateOfPost,
            imageUrl: imageUrl,
            productName: productName,
            productDescription: productDescription,
            productCategory: productCategory,
            productPrice: productPrice,
            productAddress: productAddress,
        })


    }

    return (
        isAuthenticated && (
            <>
                <h1>This is Selling Page</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Product Name</span>
                    <input onChange={setName} type="text" name="productName" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <input onChange={setDescription} type="text" name="productDescription" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                    <input onChange={setCategory} type="text" name="productCategory" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                    <input onChange={setPrice} type="text" name="productPrice" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                    <input onChange={setAddress} type="text" name="productAdress" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <input type="date" onChange={setDate} name="dateOfPost" id="" />
                Select Date
                <br />
                <input type="file" name="file" placeholder="Upload the Image" onChange={uploadImage} />
                {
                    loading ? (
                        <>
                            <h3>Loading................</h3>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>

                    ) : (
                        <img src={imageUrl} alt="" />
                    )
                }
                <br />
                <br />
                <input type="submit" onClick={sendData} value="Post Product"  />



            </>
        )
    )
}

export default Sell
