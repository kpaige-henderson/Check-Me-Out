import React from 'react';
import github from '../public/github.webp'
import email from '../public/email.jpeg'
import '../App.css';


export default function Footer() {
    return (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/kpaige-henderson" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub icon" className="icon"/>
            </a>
            <a href="mailto:kpaige.henderson@gmail.com">
            <img src={email} alt="Email icon" className="icon"/>
            </a>
        </div>
    </footer>)
};