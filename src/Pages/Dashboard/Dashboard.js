import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import AppWidgetSummary from './AppWidgetSummary';
import Page from '../../Components/Page';
import Gauge from '../Graph/Gauge';
import Card from '@mui/material/Card';
import Discrete from '../Graph/Discrete'
import Line from '../Graph/Line'

import Pi from '../Graph/Pie'
 const Dashboard = (props) => {
   return (
  
    <Page title="Dashboard">
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 3 }}>
     
      </Typography>

      <Grid container spacing={3} sx={{ background:"black" }}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Output Rate" total={"1,179 cph"}  />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Total Cards" total={"891,625"} color="info" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Availability" total={"3443"} color="warning" icon={'ant-design:windows-filled'} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          
          <Card sx={{
              height: 135
              
            }}>
             
              <Gauge></Gauge>

             </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={7}>
        <Card>           
             <Discrete></Discrete>
            </Card>
        </Grid>

          <Grid item xs={12} sm={6} md={5} >
        <Card>           
             <Pi></Pi>
            </Card>
          </Grid>

           <Grid item xs={12} sm={6} md={7} >
        <Card sx={{ height: '100%',width:"100%"}}>           
             <Line></Line>
            </Card>
        </Grid>

          <Grid item xs={12} sm={6} md={5} >
        <Card sx={{ height: '100%'}}>           
             <Pi></Pi>
            </Card>
          </Grid>
        <Grid item xs={12} sm={6} md={5}> </Grid>
      </Grid>
    </Container>
  </Page>

  );

 }

 export default Dashboard;


