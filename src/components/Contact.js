import React from 'react'
import Button from '@mui/material/Button';
const Contact = () => {
    return(
        <div className="contact-me">
        <h1>Click the button to send me a mail!</h1>
        <a href="mailto:ritikdubey1710@gmail.com"> <Button className="contact-button" color="success" variant="contained">Contact Me</Button> </a>

        </div>
    )
}
export default Contact;

