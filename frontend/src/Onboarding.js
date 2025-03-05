import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

function Onboarding() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Welcome to MarketInsight AI</DialogTitle>
      <DialogContent>
        <Typography>
          Thank you for choosing MarketInsight AI. This short tutorial will guide you through the main features of the application.
        </Typography>
        <ul>
          <li>Dashboard: Get an overview of market trends and insights.</li>
          <li>Real-Time Data: Integrate and analyze real-time data from various sources.</li>
          <li>Predictive Analytics: Use advanced machine learning models to forecast trends.</li>
          <li>NLP Analysis: Analyze text data for sentiment and topics.</li>
          <li>Alert System: Set up alerts for significant changes and events.</li>
          <li>Chatbot: Interact with the AI assistant for insights and support.</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Onboarding;