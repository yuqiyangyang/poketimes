import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom' //withRouter is higher order component 

const Navbar =(props)=>{
    // setTimeout(()=>{
    //     props.history.push('/about')//redirect to another page 
    // }, 2000)
    return(
        <nav className="nav-wrapper pink darken-3">
            <div className="container">
                <div className="brand-logo">EwithU</div>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)