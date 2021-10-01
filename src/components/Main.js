import React from 'react'
import Contact from './Contact';
import Interest from './Interest'
import Skills from './Skills'
import Works from './Works';

const Main = () => {
    return (
        <div>
           <Skills />
           <Works />
           {/* <Interest /> */}
           <Contact />
        </div>
    )
}

export default Main
