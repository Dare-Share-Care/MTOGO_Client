import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import authService from '../services/authService'; // Import authService

interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn: propIsLoggedIn, onLogout }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="2x" />;
    const navigate = useNavigate();

    useEffect(() => {
        // Check login status when the component mounts
        const checkLoginStatus = async () => {
            const token = authService.getToken();
            setIsLoggedIn(!!token);
        };

        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        authService.logout();
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div>
            <nav>
                <ul className='header'>
                    <Logo />
                    <li><NavLink to='/'>Restaurants</NavLink></li>
                    <li><NavLink to='/courier'>Courier Dashboard</NavLink></li>
                    {!isLoggedIn && <li className="align-right login-nav"><NavLink to="/login">Log in</NavLink></li>}
                    {isLoggedIn &&
                        <li>
                            <button className="align-right login-nav" onClick={handleLogout}>Logout</button>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;
