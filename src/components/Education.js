import React from 'react';

// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Education = () =>
{
    return(
    <>
    <h1 style={{'textAlign':'center'}}>My Education</h1>

    <Card className="education-card" sx={{ minWidth: 275 }}>
      <CardContent className="education-card-content">
          <img height="220px" width="220px" src="/images/collegelogo.png" />
        <br />
        <br />
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore
        </Typography>
        <Typography variant="h4" component="div">
         Bachelor of Technology
         <br />
         (Computer Science and Engineering)
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          2022
        </Typography>
        <Typography variant="h6">
          CGPA: 7.51
        </Typography>
      </CardContent>
    </Card>
    
   
    
    <Card className="education-card" sx={{ minWidth: 275 }}>
      <CardContent className="education-card-content">
          <img height="220px" width="220px" src="/images/schoollogo.png" />
        <br />
        <br />
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          St. Paul Higher Secondary School, Indore
        </Typography>
        <Typography variant="h4" component="div">
         Higher Secondary Schooling
         <br />
         (Class XII)
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          2018
        </Typography>
        <Typography variant="h6">
          Percentage: 84.6%
        </Typography>
      </CardContent>
    </Card>

    </>
    )
}
export default Education;