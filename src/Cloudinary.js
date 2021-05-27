// API Key : 648974429798816
// API Secret : G7g7fM5PfS_CT5ChBTNvA26aaQA
// API Env Variable : CLOUDINARY_URL=cloudinary://648974429798816:G7g7fM5PfS_CT5ChBTNvA26aaQA@koushik310301
// Base delivery URL:	http://res.cloudinary.com/koushik310301 ▼
// Secure delivery URL:	https://res.cloudinary.com/koushik310301 ▼
// API Base URL:	https://api.cloudinary.com/v1_1/koushik310301 ▼




import React, { useState } from 'react'
// import './cloudinary.css';
const Cloudinary = () => {

    const [loading,setLoading]=useState(false);
    const [image,setImage]=useState('')
    
    const uploadImage= async (e)=>{
        const files=e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','imagesfolder')
        setLoading(true)
        const  res=await fetch('https://api.cloudinary.com/v1_1/koushik310301/image/upload',{
            method:'POST',
            body:data
        })

        const file=await res.json();

        console.log(file);
        setImage(file.secure_url)
        setLoading(false)
    }

    return (
       <>
       <h1>Cloudinary</h1>
       <input type="file" name="file" placeholder="Upload the Image" onChange={uploadImage}/>
       {
           loading?(
               <h3>Loading................</h3>
           ):(
               <img  src={image} alt=""/>
           )
       }
       </>
    )
}


export default Cloudinary
