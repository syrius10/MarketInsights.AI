import numpy as np
from textblob import TextBlob

class ConsumerBehavior:
    def __init__(self, data):
        self.data = data

    def calculate_average_spending(self, spending):
        return np.mean(spending)

    def analyze_sentiments(self, feedback):
        sentiments = [TextBlob(text).sentiment.polarity for text in feedback]
        return sentiments

    def run(self):
        spending = np.array(self.data.get('spending', []))
        feedback = self.data.get('feedback', [])

        if len(spending) == 0 and len(feedback) == 0:
            return {"error": "No spending or feedback data provided"}

        result = {"status": "Consumer behavior analysis completed successfully"}

        if len(spending) > 0:
            avg_spending = self.calculate_average_spending(spending)
            result['average_spending'] = avg_spending

        if len(feedback) > 0:
            sentiments = self.analyze_sentiments(feedback)
            result['sentiments'] = sentiments

        return result