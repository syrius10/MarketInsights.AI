import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function NLPAnalysis() {
  const [texts, setTexts] = useState('');
  const [sentiments, setSentiments] = useState(null);
  const [entities, setEntities] = useState(null);
  const [topics, setTopics] = useState(null);

  const analyzeSentiment = async () => {
    const response = await axios.post('/api/nlp/sentiment', { texts: texts.split('\n') });
    setSentiments(response.data);
  };

  const extractEntities = async () => {
    const response = await axios.post('/api/nlp/entities', { texts: texts.split('\n') });
    setEntities(response.data);
  };

  const extractTopics = async () => {
    const response = await axios.post('/api/nlp/topics', { texts: texts.split('\n') });
    setTopics(response.data);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">NLP Analysis</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Texts"
          placeholder="Enter texts separated by new lines"
          multiline
          rows={4}
          value={texts}
          onChange={(e) => setTexts(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={analyzeSentiment}>
          Analyze Sentiment
        </Button>
        <Button variant="contained" color="primary" onClick={extractEntities}>
          Extract Entities
        </Button>
        <Button variant="contained" color="primary" onClick={extractTopics}>
          Extract Topics
        </Button>
        {sentiments && <pre>{JSON.stringify(sentiments, null, 2)}</pre>}
        {entities && <pre>{JSON.stringify(entities, null, 2)}</pre>}
        {topics && <pre>{JSON.stringify(topics, null, 2)}</pre>}
      </Grid>
    </Grid>
  );
}

export default NLPAnalysis;