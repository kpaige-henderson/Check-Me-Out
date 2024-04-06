import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
    return (
        <div classname="App">
            <Header />
            <Navigation />
            <ContentSection />
            <Footer />
        </div>
    );
}

export default App;