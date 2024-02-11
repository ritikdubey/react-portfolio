import React from 'react'
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import Introduction from './Introduction';
import Projects from './Projects';
import Introduction2 from './Introduction2';
import Experience from './Experience';
import BottomBar from './BottomBar';

const Home = () => {
    return(
        <>
        {/* <Introduction />
        <TechnicalSkills />
        <Projects />
        <Education /> */}   

        <Introduction2 />
        <Experience />
        <BottomBar fontSize="large" />
        
        </>
    )
}
export default Home;