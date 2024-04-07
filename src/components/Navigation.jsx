import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navigation() {
    return (
    <nav className="nav-container">
        <div>
            <ul>
                <li> 
                    <NavLink to="/"> About </NavLink>
                </li>
                <li> 
                    <NavLink to="/portfolio"> Portfolio </NavLink>
                </li>
                <li> 
                    <NavLink to="/contact"> Contact </NavLink>
                </li>
                <li> 
                    <NavLink to="/resume"> Resume </NavLink>
                </li>
            </ul>
        </div>
    </nav>)
};