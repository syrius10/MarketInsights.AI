import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

function MarketingAutomation() {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [segments, setSegments] = useState(null);

  const segmentCustomers = async () => {
    const response = await axios.post('/segment_customers', { data: JSON.parse(data) });
    setSegments(response.data);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Marketing Automation</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TextField
            label="Customer Data"
           