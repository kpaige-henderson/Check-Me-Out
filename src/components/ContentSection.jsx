import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const ContentSection =  ({ currentSection }) => {
    return (
        <div className="content-section">
        {currentSection === 'About Me' && <About />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
        </div>
    );
};

export default ContentSection;