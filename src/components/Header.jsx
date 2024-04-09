import '../App.css';
import Navigation from './Navigation';

export default function Header() {
    return (
    <header className="header">
        <div>
            <h1 className="name">Kendall Henderson</h1>
            <p className="title">Full Stack Developer</p>
            <Navigation />
        </div>
    </header>
    );
}
