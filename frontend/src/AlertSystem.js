import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

function AlertSystem() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    await axios.post('/api/alerts/email', { to_email: email, subject, message });
  };

  const sendSms = async () => {
    await axios.post('/api/alerts/sms', { to_number: number, message });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Alert System</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={sendEmail}>
          Send Email
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          fullWidth
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={sendSms}>
          Send SMS
        </Button>
      </Grid>
    </Grid>
  );
}

export default AlertSystem;