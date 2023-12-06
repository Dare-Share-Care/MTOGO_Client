import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Define TypeScript interface for props
interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="2x" />;

    const navigate = useNavigate();

    const onClick = () => {
        onLogout();
    };

    const navigateProfile = () => {
        navigate("/profile/" + localStorage.getItem('userId'));
    };

    return (
        <div>
            <nav>
                <ul className='header'>
                    <Logo />
                    {!isLoggedIn && <li className="align-right login-nav"><NavLink to="/login">Log in</NavLink></li>}
                    {isLoggedIn &&
                        <div>
                            <li onClick={onClick} className='align-right login-nav'><NavLink to="/landing-page">Log out</NavLink></li>
                            <li className="align-right"><span onClick={navigateProfile} className="user-nav">{localStorage.getItem('user')} {userIcon}</span></li>
                            <li className="align-right"><NavLink to="/cart"><div className="cart-icon">{cartIcon}</div></NavLink></li>
                        </div>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;
