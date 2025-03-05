import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function PortfolioManagement() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);

  const handleInputChange = (e, index, field) => {
    const updatedData = [...data];
    updatedData[index][field] = e.target.value;
    setData(updatedData);
  };

  const addRow = () => {
    setData([...data, { feature1: '', feature2: '', target: '' }]);
  };

  const optimizePortfolio = async () => {
    const response = await axios.post('/portfolio/optimize', data);
    setResult(response.data);
  };

  const rebalancePortfolio = async () => {
    const response = await axios.post('/portfolio/rebalance', data);
    setResult(response.data);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">AI-Powered Financial Portfolio Management</Typography>
      <Paper className={classes.paper}>
        {data.map((row, index) => (
          <div key={index}>
            <TextField
              label="Feature 1"
              value={row.feature1}
              onChange={(e) => handleInputChange(e, index, 'feature1')}
            />
            <TextField
              label="Feature 2"
              value={row.feature2}
              onChange={(e) => handleInputChange(e, index, 'feature2')}
            />
            <TextField
              label="Target"
              value={row.target}
              onChange={(e) => handleInputChange(e, index, 'target')}
            />
          </div>
        ))}
        <Button className={classes.button} onClick={addRow}>Add Row</Button>
        <Button className={classes.button} onClick={optimizePortfolio}>Optimize Portfolio</Button>
        <Button className={classes.button} onClick={rebalancePortfolio}>Rebalance Portfolio</Button>
      </Paper>
      {result && (
        <Paper className={classes.paper}>
          <Typography variant="h6">Result</Typography>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </Paper>
      )}
    </Container>
  );
}

export default PortfolioManagement;