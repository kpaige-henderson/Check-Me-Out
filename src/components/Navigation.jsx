import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navigation() {
    return (
    <nav className="nav-container">
        <div>
            <ul>
                <li> 
                    <NavLink className="nav" to="/"> About </NavLink>
                </li>
                <li> 
                     <NavLink className="nav" to="/resume"> Resume </NavLink>
                </li>
                <li> 
                     <NavLink className="nav" to="/portfolio"> Portfolio </NavLink>
                </li>
                <li> 
                    <NavLink className="nav" to="/contact"> Contact </NavLink>
                </li>
            </ul>
        </div>
    </nav>)
};