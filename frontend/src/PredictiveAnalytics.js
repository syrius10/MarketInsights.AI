import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Grid, Paper } from '@material-ui/core';

function PredictiveAnalytics() {
  const [data, setData] = useState('');
  const [nClusters, setNClusters] = useState('');
  const [lstmModel, setLstmModel] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [clusters, setClusters] = useState(null);

  const trainLstmModel = async () => {
    const response = await axios.post('/api/predictive/train_lstm', { data: data.split(',').map(Number) });
    setLstmModel(response.data);
  };

  const predictLstm = async () => {
    const response = await axios.post('/api/predictive/predict_lstm', { model: lstmModel, data: data.split(',').map(Number) });
    setPredictions(response.data);
  };

  const segmentCustomers = async () => {
    const response = await axios.post('/api/predictive/segment_customers', { data: data.split(',').map(Number), n_clusters: Number(nClusters) });
    setClusters(response.data);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Predictive Analytics</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Data"
          placeholder="Enter data separated by commas"
          value={data}
          onChange={(e) => setData(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={trainLstmModel}>
          Train LSTM Model
        </Button>
        <Button variant="contained" color="primary" onClick={predictLstm} disabled={!lstmModel}>
          Predict with LSTM Model
        </Button>
        {predictions && <pre>{JSON.stringify(predictions, null, 2)}</pre>}
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Number of Clusters"
          placeholder="Enter number of clusters"
          value={nClusters}
          onChange={(e) => setNClusters(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={segmentCustomers}>
          Segment Customers
        </Button>
        {clusters && <pre>{JSON.stringify(clusters, null, 2)}</pre>}
      </Grid>
    </Grid>
  );
}

export default PredictiveAnalytics;