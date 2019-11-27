import React from 'react';
import{ Link, NavLink, withRouter } from 'react-router-dom';


function Navbar(props){
    setTimeout(()=>{
        props.history.push("/")
    }, 10000);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Poke 'Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink color={'blue'} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


export default withRouter(Navbar);