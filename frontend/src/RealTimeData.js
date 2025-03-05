import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function RealTimeData() {
  const [symbol, setSymbol] = useState('');
  const [keyword, setKeyword] = useState('');
  const [stockData, setStockData] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  const fetchStockPrices = async () => {
    const response = await axios.get(`/api/real_time/stock/${symbol}`);
    setStockData(response.data);
  };

  const fetchSocialMediaSentiment = async () => {
    const response = await axios.get(`/api/real_time/social_sentiment/${keyword}`);
    setSentimentData(response.data);
  };

  const fetchNewsArticles = async () => {
    const response = await axios.get(`/api/real_time/news/${keyword}`);
    setNewsData(response.data);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Real-Time Data Integration</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={fetchStockPrices}>
          Fetch Stock Prices
        </Button>
        {stockData && <pre>{JSON.stringify(stockData, null, 2)}</pre>}
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={fetchSocialMediaSentiment}>
          Fetch Social Media Sentiment
        </Button>
        {sentimentData && <pre>{JSON.stringify(sentimentData, null, 2)}</pre>}
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={fetchNewsArticles}>
          Fetch News Articles
        </Button>
        {newsData && <pre>{JSON.stringify(newsData, null, 2)}</pre>}
      </Grid>
    </Grid>
  );
}

export default RealTimeData;