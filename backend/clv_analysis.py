import pandas as pd
from sklearn.linear_model import LinearRegression

class CLVAnalysis:
    def __init__(self, data):
        self.data = data

    def predict_clv(self):
        X = self.data[['customer_age', 'purchase_frequency', 'avg_purchase_value']]
        y = self.data['customer_lifetime_value']
        model = LinearRegression()
        model.fit(X, y)
        predictions = model.predict(X)
        self.data['predicted_clv'] = predictions
        return self.data