import React, { useState } from 'react';





const reverseColorOnHover = (e) => {
    // setTimeout(() => {
    //     // e3cdb6 FFB000 FDF6EC
    //     e.target.style.color = "#e3cdb6";
    // }, 1500);
}

const Introduction2 = () => {

    const updateColorOnHover = (e) => {

        e.target.style.filter = 'blur(0px)';
        e.target.style.textDecoration="none";
        if(e.target.id=="intro-3"){
        e.target.style.color = "#ffe000";
        } else if(e.target.id=="intro-2"){
            e.target.style.color = "#31d3ff"; 
        } else if(e.target.id=="intro-1"){
            e.target.style.color = "#fa0041"; 
        } else if(e.target.id=="intro-4"){
            e.target.style.color = "#23cfa7"; 
        }
        
    }

    return(
        <>
        <div  class="home">
            <img src="images/pencil.jpg"  />
            <div class="header-div">
            <h1 id="intro-1" onMouseEnter={updateColorOnHover} onMouseLeave={reverseColorOnHover}>Hello, I am Ritik</h1>
            <h1 id="intro-2" onMouseEnter={updateColorOnHover} onMouseLeave={reverseColorOnHover}>I am a software developer</h1>
            <h1 id="intro-3" onMouseEnter={updateColorOnHover} onMouseLeave={reverseColorOnHover}>transforming ideas into code</h1>
            <h1 id="intro-4" onMouseEnter={updateColorOnHover} onMouseLeave={reverseColorOnHover}>and crafting beautiful apps</h1>
            </div>
            {/* <img src="images/pencil.jpg"/> */}
        </div>
        </>
    )
}

export default Introduction2;