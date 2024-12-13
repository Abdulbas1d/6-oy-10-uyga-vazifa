import React from 'react'
import './MainLayouts.css'
import { NavLink } from 'react-router-dom'
import moonPicture from '../assets/images/moon-picture.png'
import cartPicture from '../assets/images/cart-shopping.png'

function MainLayouts({ children }) {
    return (
        <div>
            <div className="container">
                <div className="headerTop">
                    <NavLink className="nav-link" to='/login'>Sign in / Guest</NavLink>
                    <NavLink className="nav-link" to='/createAccount'>Create Account</NavLink>
                </div>
                <header className="header">
                    <button>C</button>
                    <div className="data">
                        <NavLink className="aHref" to='/'>Home</NavLink>
                        <NavLink className="aHref" to='/about'>About</NavLink>
                        <NavLink className="aHref" to='/products'>Products</NavLink>
                        <NavLink className="aHref" to='/cards'>Cards</NavLink>
                    </div>

                    <div className="images">
                        <img className='moon' src={moonPicture} alt="" />
                        <img className='shopping' src={cartPicture} alt="" />
                    </div>
                </header>
            </div>

            {children}
        </div>
    )
}

export default MainLayouts
