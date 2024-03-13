import React from 'react'
import Data from './Data';
import Shipdata from './Shipdata';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const home = location.pathname === '/' || location.pathname === '';
    const bill=location.pathname==='/payment';
    return (
        <div>
            <nav>
                <div className='nav mx-32'>
                    <ul className='navbar'>
                        <li><Link className='block mt-4 mb-4' to="/">Delivery</Link></li>{!home && <Data />}<hr />
                        <li><Link className='block mt-4 mb-4' to="/shipping">Shipping</Link></li>{bill && <Shipdata/>}<hr />
                        <li><Link className='block mt-4 mb-4' to="/billing">Billing</Link></li>{bill && <Data />}<hr />
                        <li><Link className='block mt-4 mb-16' to="/payment">Payment</Link></li>
                    </ul>
                </div>
            </nav>
            <Footer />
        </div>
    )
}

export default Navbar
