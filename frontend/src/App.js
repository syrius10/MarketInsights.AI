import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, deepOrange } from '@material-ui/core/colors';
import Dashboard from './Dashboard';
import RealTimeData from './RealTimeData';
import PredictiveAnalytics from './PredictiveAnalytics';
import NLPAnalysis from './NLPAnalysis';
import AlertSystem from './AlertSystem';
import Chatbot from './Chatbot';
import DragAndDrop from './DragAndDrop';
import Onboarding from './Onboarding';
import MarketingAutomation from './MarketingAutomation';
import FinancialForecasting from './FinancialForecasting';
import SupplyChainOptimization from './SupplyChainOptimization';
import CybersecurityAnalytics from './CybersecurityAnalytics';
import CLVAnalysis from './CLVAnalysis';
import EmotionalChatbot from './EmotionalChatbot';
import FraudDetection from './FraudDetection';
import BlockchainSecurity from './BlockchainSecurity';
import DigitalTwin from './DigitalTwin';
import QuantumComputing from './QuantumComputing';
import AutonomousAgents from './AutonomousAgents';
import BiometricAuthentication from './BiometricAuthentication';
import FinancialRiskManagement from './FinancialRiskManagement';
import SmartContractIntegration from './SmartContractIntegration';
import LegalDocumentAnalysis from './LegalDocumentAnalysis';
import TalentManagement from './TalentManagement';
import MarketSentimentAnalysis from './MarketSentimentAnalysis';
import CustomerSupportAutomation from './CustomerSupportAutomation';
import SalesForecasting from './SalesForecasting';
import PresentationWebsite from './PresentationWebsite';
import PortfolioManagement from './PortfolioManagement';  // New import
import HealthcareAnalytics from './HealthcareAnalytics';  // New import
import EnvironmentalImpact from './EnvironmentalImpact';  // New import
import RealEstateAnalysis from './RealEstateAnalysis';  // New import
import AgriculturalOptimization from './AgriculturalOptimization';  // New import
import CybersecurityThreatDetection from './CybersecurityThreatDetection';  // New import
import PersonalizedLearning from './PersonalizedLearning';  // New import
import AutonomousVehicles from './AutonomousVehicles';  // New import
import SmartHome from './SmartHome';  // New import
import LegalResearchCompliance from './LegalResearchCompliance';  // New import

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: deepOrange,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) setToken(data.access_token);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                MarketInsight AI
              </Typography>
              <Button color="inherit" component={Link} to="/">Dashboard</Button>
              <Button color="inherit" component={Link} to="/real-time-data">Real-Time Data</Button>
              <Button color="inherit" component={Link} to="/predictive-analytics">Predictive Analytics</Button>
              <Button color="inherit" component={Link} to="/nlp-analysis">NLP Analysis</Button>
              <Button color="inherit" component={Link} to="/alert-system">Alert System</Button>
              <Button color="inherit" component={Link} to="/chatbot">Chatbot</Button>
              <Button color="inherit" component={Link} to="/drag-and-drop">Drag and Drop</Button>
              <Button color="inherit" component={Link} to="/marketing-automation">Marketing Automation</Button>
              <Button color="inherit" component={Link} to="/financial-forecasting">Financial Forecasting</Button>
              <Button color="inherit" component={Link} to="/supply-chain-optimization">Supply Chain Optimization</Button>
              <Button color="inherit" component={Link} to="/cybersecurity-analytics">Cybersecurity Analytics</Button>
              <Button color="inherit" component={Link} to="/clv-analysis">CLV Analysis</Button>
              <Button color="inherit" component={Link} to="/emotional-chatbot">Emotional Chatbot</Button>
              <Button color="inherit" component={Link} to="/fraud-detection">Fraud Detection</Button>
              <Button color="inherit" component={Link} to="/blockchain-security">Blockchain Security</Button>
              <Button color="inherit" component={Link} to="/digital-twin">Digital Twin</Button>
              <Button color="inherit" component={Link} to="/quantum-computing">Quantum Computing</Button>
              <Button color="inherit" component={Link} to="/autonomous-agents">Autonomous Agents</Button>
              <Button color="inherit" component={Link} to="/biometric-authentication">Biometric Authentication</Button>
              <Button color="inherit" component={Link} to="/financial-risk-management">Financial Risk Management</Button>
              <Button color="inherit" component={Link} to="/smart-contract-integration">Smart Contract Integration</Button>
              <Button color="inherit" component={Link} to="/legal-document-analysis">Legal Document Analysis</Button>
              <Button color="inherit" component={Link} to="/talent-management">Talent Management</Button>
              <Button color="inherit" component={Link} to="/market-sentiment-analysis">Market Sentiment Analysis</Button>
              <Button color="inherit" component={Link} to="/customer-support-automation">Customer Support Automation</Button>
              <Button color="inherit" component={Link} to="/sales-forecasting">Sales Forecasting</Button>
              <Button color="inherit" component={Link} to="/portfolio-management">Portfolio Management</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/healthcare-analytics">Healthcare Analytics</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/environmental-impact">Environmental Impact</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/real-estate-analysis">Real Estate Analysis</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/agricultural-optimization">Agricultural Optimization</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/cybersecurity-threat-detection">Cybersecurity Threat Detection</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/personalized-learning">Personalized Learning</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/autonomous-vehicles">Autonomous Vehicles</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/smart-home">Smart Home</Button>  {/* New button */}
              <Button color="inherit" component={Link} to="/legal-research-compliance">Legal Research Compliance</Button>  {/* New button */}
            </Toolbar>
          </AppBar>
          <Container className={classes.container}>
            <Onboarding />
            {!token ? (
              <div>
                <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={login}>Login</Button>
              </div>
            ) : (
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/real-time-data" component={RealTimeData} />
                <Route path="/predictive-analytics" component={PredictiveAnalytics} />
                <Route path="/nlp-analysis" component={NLPAnalysis} />
                <Route path="/alert-system" component={AlertSystem} />
                <Route path="/chatbot" component={Chatbot} />
                <Route path="/drag-and-drop" component={DragAndDrop} />
                <Route path="/marketing-automation" component={MarketingAutomation} />
                <Route path="/financial-forecasting" component={FinancialForecasting} />
                <Route path="/supply-chain-optimization" component={SupplyChainOptimization} />
                <Route path="/cybersecurity-analytics" component={Cybersecurity