import React from "react";

const Experience = () => {
    return(
        <>
        <h1 style={{"textAlign":"center", "marginTop":"30px", "fontWeight":"bold", 
        "fontSize":"7vh", "color":"#fa0041"}}>EXPERIENCE</h1>
        <div class="experience-container">
                <div class="experience-item">
                    <p style={{"textAlign":"center", "fontStyle":"italic"}}>July 2022 - Present</p>
                    <img src="images/tcs.png" style={{"height":"75%", "width":"100%"}}/>
                </div>
                <div class="experience-item">
                    <p style={{"textAlign":"left", "textAlign":"justify"}}>
                        <span style={{"fontWeight":"bold", "fontSize":"4vh"}}>Tata Consultancy Services</span>
                        <br/>
                        <span style={{"fontSize":"3vh", "fontStyle":"italic"}}>Systems Engineer</span> 
                        <br/>
                        Developed and maintained enterprise-grade  web applications using Spring Boot framework.
                        Used advanced debugging techniques to identify and resolve complex issues, ensuring
                        the smooth operation of applications in production environments.
                        Utilized logging frameworks like Log4j to track and analyze application logs, aiding in
                        root cause analysis and debugging
                    </p>
                    <span class="tech-skill">Spring Boot</span>
                    <span class="tech-skill">Java</span>
                    <span class="tech-skill">JavaScript</span>
                    <span class="tech-skill">React</span>
                    <span class="tech-skill">Python</span>
                    <br/>
                    <br/>
                    <span class="tech-skill">HTML & CSS</span>
                    <span class="tech-skill">Git</span>
                </div>
        </div>
        <div class="experience-container">
                <div class="experience-item">
                    <p style={{"textAlign":"center", "fontStyle":"italic"}}>April 2022 - June 2022</p>
                    <img src="images/rbt.png" style={{"height":"75%", "width":"100%"}}/>
                </div>
                <div class="experience-item">
                    <p style={{"textAlign":"left", "textAlign":"justify"}}>
                        <span style={{"fontWeight":"bold", "fontSize":"4vh"}}>RedBlackTree Technologies</span>
                        <br/>
                        <span style={{"fontSize":"3vh", "fontStyle":"italic"}}>Engineering Intern</span> 
                        <br/>
                        Developed web applications using Angular and Node.js, ensuring performance enchancement
                        and responsive user interfaces.
                        Implemented authentication and authorization mechanisms using JWT (JSON Web
                        Tokens) for secure access to application resources.
                    </p>
                    <span class="tech-skill">Node.js</span>
                    <span class="tech-skill">Angular</span>
                    <span class="tech-skill">JavaScript</span>
                </div>
        </div>
        </>
    )
}

export default Experience;