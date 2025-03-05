import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('/chatbot', { message });
    setResponse(res.data.response);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Chatbot Interface</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} fullWidth />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
        <Typography variant="body1">{response}</Typography>
      </Grid>
    </Grid>
  );
}

export default Chatbot;