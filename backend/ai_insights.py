import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from textblob import TextBlob

class AIInsights:
    def __init__(self, data):
        self.data = data

    def provide_recommendations(self):
        recommendations = []
        if 'prices' in self.data:
            prices = np.array(self.data['prices'])
            if len(prices) > 1:
                model = LinearRegression()
                X = np.arange(len(prices)).reshape(-1, 1)
                model.fit(X, prices)
                trend = model.predict(X)
                if trend[-1] > trend[0]:
                    recommendations.append("Consider investing more as the trend is upward.")
                else:
                    recommendations.append("Consider reducing investment as the trend is downward.")
        if 'feedback' in self.data:
            feedback = self.data['feedback']
            sentiments = [TextBlob(text).sentiment.polarity for text in feedback]
            avg_sentiment = np.mean(sentiments)
            if avg_sentiment > 0:
                recommendations.append("Overall positive feedback. Continue with current strategies.")
            else:
                recommendations.append("Negative feedback detected. Review and improve customer satisfaction.")
        return recommendations

    def generate_summary(self):
        summary = []
        if 'prices' in self.data:
            prices = np.array(self.data['prices'])
            summary.append(f"Total data points: {len(prices)}")
            summary.append(f"Average price: {np.mean(prices)}")
            summary.append(f"Maximum price: {np.max(prices)}")
            summary.append(f"Minimum price: {np.min(prices)}")
        if 'feedback' in self.data:
            feedback = self.data['feedback']
            sentiments = [TextBlob(text).sentiment.polarity for text in feedback]
            avg_sentiment = np.mean(sentiments)
            summary.append(f"Total feedback entries: {len(feedback)}")
            summary.append(f"Average sentiment score: {avg_sentiment}")
        return summary