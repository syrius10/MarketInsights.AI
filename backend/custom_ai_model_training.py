import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

class CustomAIModelTraining:
    def __init__(self, model, params):
        self.model = model
        self.params = params

    def train_model(self, X, y):
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        self.model.set_params(**self.params)
        self.model.fit(X_train, y_train)
        predictions = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, predictions)
        return {"model": self.model, "accuracy": accuracy}

    def evaluate_model(self, X, y):
        predictions = self.model.predict(X)
        accuracy = accuracy_score(y, predictions)
        return {"accuracy": accuracy, "predictions": predictions.tolist()}