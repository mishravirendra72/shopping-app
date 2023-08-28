import React from 'react';
import '../styles/navbar.css';
import ca from '../image/ca.png';

const Navbar = ({ size, setShow }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                    My Shopping
                </span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i className="fas fa-cart-plus"></i>
                        <img src="./src/image/ca.png" alt="" />
                        My Cart
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar