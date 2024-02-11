import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "react-bootstrap";

const BottomBar = () => {

    const highlightIcon = (e) => {
        e.target.style.color = "aqua";
    }

    const revertIconColor = (e) => {
        e.target.style.color = "#e3cdb6";
    }

    return(
        <>
        <h1 style={{"textAlign":"center", "color":"#ffe000"}}>Contact</h1>
        <div  style={{"textAlign":"center", "marginBottom":"20px"}}>
        <a onMouseOver={highlightIcon} onMouseOut={revertIconColor} style={{"color":"#e3cdb6", "marginRight":"10px"}} target="_blank" href="https://www.linkedin.com/in/ritikdubey17/">
            <LinkedInIcon fontSize="large" />
        </a>
        <a onMouseOver={highlightIcon} onMouseOut={revertIconColor}  style={{"color":"#e3cdb6", "marginRight":"10px"}} target="_blank" href="https://www.instagram.com/ritik.dubey/">
            <InstagramIcon fontSize="large" />
            </a>
        <a onMouseOver={highlightIcon} onMouseOut={revertIconColor} style={{"color":"#e3cdb6"}} target="_blank" href="https://github.com/ritikdubey">
            <GitHubIcon fontSize="large" />
        </a>
        <br/>
        </div>
        <div style={{"textAlign":"center", "marginBottom":"40px"}}>
        <a  class="tech-skill"  href="mailto:ritikdubey1710@gmail.com" style={{"textDecoration":"none"}}> 
        Send a Mail
        </a>
        </div>
        </>
    )
}

export default BottomBar;