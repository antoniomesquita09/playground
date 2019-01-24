import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return(
        <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link to='/' className='navbar-brand'>
                    Tonin`s Streamy
                    </Link>
                </div>
                <ul className='nav navbar-nav'>
                    <li className='active'>
                        <Link to='/'>
                            All Streams
                        </Link>
                    </li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <GoogleAuth />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;