import unittest
from app import app

class MarketInsightAITestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True
        self.token = None

    def login(self):
        response = self.app.post('/login', json={'username': 'test', 'password': 'test'})
        self.token = response.json['access_token']

    def test_login(self):
        response = self.app.post('/login', json={'username': 'test', 'password': 'test'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('access_token', response.json)

    def test_analyze_market(self):
        self.login()
        market_data = {
            'prices': [100, 200, 300, 400, 500],
            'window_size': 3,
            'forecast_period': 5
        }
        response = self.app.post('/analyze_market', json=market_data, headers={'Authorization': f'Bearer {self.token}'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('moving_average', response.json)
        self.assertIn('forecast', response.json)

    def test_analyze_consumer(self):
        self.login()
        consumer_data = {
            'spending': [100, 200, 300, 400, 500],
            'feedback': ['Great product', 'Not satisfied', 'Good value', 'Poor quality']
        }
        response = self.app.post('/analyze_consumer', json=consumer_data, headers={'Authorization': f'Bearer {self.token}'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('average_spending', response.json)
        self.assertIn('sentiments', response.json)

    def test_analyze_competitor(self):
        self.login()
        competitor_data = {
            'competitor_prices': {
                'competitor1': [100, 200, 300],
                'competitor2': [150, 250, 350]
            }
        }
        response = self.app.post('/analyze_competitor', json=competitor_data, headers={'Authorization': f'Bearer {self.token}'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('average_competitor_prices', response.json)

if __name__ == '__main__':
    unittest.main()