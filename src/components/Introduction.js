import { Typography } from '@mui/material';
import React from 'react'

const Introduction = () => {
    return(
     
        <div className="introduction-div" style={{'marginBottom': '220px'}}>

        <Typography style={{'fontSize': '165px'}}>Hi, I am Ritik</Typography>
        <Typography style={{'fontSize': '85px'}}>Mostly, I do <code style={{'color': 'white'}}>Web Development</code> </Typography>
        <Typography style={{'fontSize': '70px'}}>But I keep exploring new things.</Typography>
        
        </div>
 
    )
}
export default Introduction;