import requests
import json

class RealTimeData:
    def __init__(self, api_key):
        self.api_key = api_key

    def get_stock_prices(self, symbol):
        url = f'https://api.example.com/stock/{symbol}?apikey={self.api_key}'
        response = requests.get(url)
        return response.json()

    def get_social_media_sentiment(self, keyword):
        url = f'https://api.example.com/social_sentiment/{keyword}?apikey={self.api_key}'
        response = requests.get(url)
        return response.json()

    def get_news_articles(self, keyword):
        url = f'https://api.example.com/news/{keyword}?apikey={self.api_key}'
        response = requests.get(url)
        return response.json()