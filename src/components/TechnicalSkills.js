import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

  

const TechnicalSkills = () => {
    return(
        <>
        <h1 style={{'textAlign': 'center', 'marginBottom': '25px'}}>My Technical Skills</h1>

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} >
            <Item><img height="200px" width="200px" src="/images/javafinal.jpg" /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item><img height="200px" width="200px" src="/images/react.png" /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item><img height="200px" width="200px" src="/images/javascript.jfif" /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item><img height="200px" width="200px" src="/images/nodejs.png" /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item><img height="200px" width="200px" src="/images/git.png" /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item><img height="200px" width="200px" src="/images/bootstrap.png" /></Item>
          </Grid>
      </Grid>
    </Box>
        </>
    )
}
export default TechnicalSkills;