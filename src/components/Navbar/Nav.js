import { useState,useContext } from "react"
import { FaHome } from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import { AiFillShopping, AiFillCaretDown } from "react-icons/ai"
import "./Nav.css"
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Nav() {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    return (
        <nav className="navbar">
            <Router>
                <a href="/" className="navbar-logo">
                    Shoe Mart
                <AiFillShopping className="top-icon" />
                </a>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="/" className="nav-links"><FaHome className="icon" />Home</a></li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link className="nav-links" ><AiFillCaretDown /> Explore </Link>
                        {dropdown
                            &&
                            <ul className="dropdown-menu">
                                <li> <a href="/category/t-shirt" className="dropdown-link">Clothes</a></li>
                                <li> <a href='/category/pants' className="dropdown-link">Pants</a></li>
                                <li> <a href='/category/accessories' className="dropdown-link">Accessories</a></li>
                                <li> <a href='/category/jacket' className="dropdown-link">Jacket</a></li>
                                <li> <a href='/category/hoodie' className="dropdown-link">Hoodie</a></li>
                                <li> <a href='/category/sweatshirt' className="dropdown-link">Sweatshirt</a></li>
                            </ul>
                        }
                    </li>
                    <li className="nav-item"><a href="/cart" className="nav-links"><MdShoppingCart />Cart items</a></li>
                </ul>
            </Router>
        </nav>
    )
}

export default Nav;