import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MarketTrendsChart from './charts/MarketTrendsChart';
import ConsumerBehaviorChart from './charts/ConsumerBehaviorChart';
import CompetitorAnalysisChart from './charts/CompetitorAnalysisChart';
import GeospatialAnalysisChart from './charts/GeospatialAnalysisChart';
import StorytellingChart from './charts/StorytellingChart';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

function AdvancedDashboard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Advanced Dashboard</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Market Trends</Typography>
          <MarketTrendsChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Consumer Behavior</Typography>
          <ConsumerBehaviorChart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Competitor Analysis</Typography>
          <CompetitorAnalysisChart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Geospatial Analysis</Typography>
          <GeospatialAnalysisChart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Data Storytelling</Typography>
          <StorytellingChart />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AdvancedDashboard;