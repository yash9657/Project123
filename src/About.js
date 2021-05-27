import React from 'react'
import './about.css'
import { useAuth0 } from '@auth0/auth0-react';
const About = () => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
                <h1>Hello from about page</h1>
                
            </>
        )
    )
}

export default About
