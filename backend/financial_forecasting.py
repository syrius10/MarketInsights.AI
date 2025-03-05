import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

class FinancialForecasting:
    def __init__(self, data):
        self.data = data

    def train_model(self):
        X = self.data.drop('target', axis=1)
        y = self.data['target']
        model = RandomForestRegressor()
        model.fit(X, y)
        return model

    def forecast(self, model, future_data):
        predictions = model.predict(future_data)
        return predictions