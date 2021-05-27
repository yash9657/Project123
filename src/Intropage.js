import React from 'react'
import './intropage.css'
import LoginButton from './Loginbutton'
import { useAuth0 } from '@auth0/auth0-react';
import Loader from './Loader';
const Intropage = () => {
    const { isLoading,isAuthenticated } = useAuth0();
    if(isLoading) return (
        <>
            <Loader/>
        </>
    )
    return (
        !isAuthenticated && (
            <>
                <div className="main">
                    <div className="border">
                        <span className="heading">QUICK FLIP</span>
                        <p className="sub-heading">Designed By PBL Group</p>
                    </div>
                    <div className="base-wrapper">
                        <div className="base">
                            <LoginButton />
                        </div>
                        <a href="https://github.com/georgeonadyfouad" >
                            <div className="hidden-childs hc-1">
                                <i className="fa fa-github"></i>
                            </div>
                        </a>

                        <a href="https://twitter.com/Georgo_Nady" >
                            <div className="hidden-childs hc-2">
                                <i className="fa fa-twitter"></i>
                            </div>
                        </a>

                        <a href="https://codepen.io/georgeonady/" >
                            <div className="hidden-childs hc-3">
                                <i className="fa fa-codepen"></i>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/george-nady-8a07437b/">
                            <div className="hidden-childs hc-4">
                                <i className="fa fa-linkedin"></i>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gorgonadyg601a">
                            <div className="hidden-childs hc-5">
                                <i className="fa fa-behance"></i>
                            </div>
                        </a>

                    </div>
                </div>
            </>
        )
    )
}

export default Intropage
