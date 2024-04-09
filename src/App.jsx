import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
