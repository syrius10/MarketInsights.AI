import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [marketData, setMarketData] = useState({ prices: '', window_size: '', forecast_period: '' });
  const [consumerData, setConsumerData] = useState({ spending: '', feedback: '' });
  const [competitorData, setCompetitorData] = useState({ competitor_prices: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      setToken(response.data.access_token);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.msg : 'An error occurred');
    }
  };

  const analyzeMarket = async () => {
    try {
      const response = await axios.post('/analyze_market', marketData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  const analyzeConsumer = async () => {
    try {
      const response = await axios.post('/analyze_consumer', consumerData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  const analyzeCompetitor = async () => {
    try {
      const response = await axios.post('/analyze_competitor', competitorData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>AI-Driven Market Research</Text>
      {!token ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={login} />
        </View>
      ) : (
        <View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Market Analysis</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter prices separated by commas"
              onChangeText={(text) => setMarketData({ ...marketData, prices: text.split(',').map(Number) })}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter window size"
              keyboardType="numeric"
              onChangeText={(text) => setMarketData({ ...marketData, window_size: Number(text) })}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter forecast period"
              keyboardType="numeric"
              onChangeText={(text) => setMarketData({ ...marketData, forecast_period: Number(text) })}
            />
            <Button title="Analyze Market" onPress={analyzeMarket} />
          </View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Consumer Behavior Analysis</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter spending values separated by commas"
              onChangeText={(text) => setConsumerData({ ...consumerData, spending: text.split(',').map(Number) })}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter feedback texts separated by new lines"
              multiline
              onChangeText={(text) => setConsumerData({ ...consumerData, feedback: text.split('\n') })}
            />
            <Button title="Analyze Consumer" onPress={analyzeConsumer} />
          </View>
          <View style={styles.section}>
            <Text style={styles.subheader}>Competitor Analysis</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter competitor prices as JSON, e.g. {"competitor1": [10, 20, 30], "competitor2": [15, 25, 35]}'
              multiline
              onChangeText={(text) => setCompetitorData({ ...competitorData, competitor_prices: JSON.parse(text) })}
            />
            <Button title="Analyze Competitor" onPress={analyzeCompetitor} />
          </View>
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
      {result && <Text style={styles.result}>{JSON.stringify(result, null, 2)}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  result: {
    marginTop: 16,
  },
});