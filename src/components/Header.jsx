import '../App.css';
import Headshot from '../public/IMG_1300.jpeg';
import Navigation from './Navigation';


export default function Header() {
    return (
    <header className="header-content">
        <div>
        <div className="navigation-container">
            <Navigation />
            </div>
            <h1 className="name">Kendall Henderson</h1>
            <p className="title">Full Stack Developer</p>
        <img  className="headshot" src={Headshot} alt="Headshot" />
        </div>
    </header>
    );
}
