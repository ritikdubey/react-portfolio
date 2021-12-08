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
          <img height="220px" width="220px" src="https://lh3.googleusercontent.com/proxy/n5fSjAcDfnhjGhZaJ_qWVYIC6MiUaNhCs_YLSbqANHFppMZz_j7va_pIdR0ztHph16fk2keoszFlFoNTKfgVPgHj82kWkukVNUo" />
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
          <img height="220px" width="220px" src="https://www.stpaulindore.com/assets/images/logo-1683x1703.png" />
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