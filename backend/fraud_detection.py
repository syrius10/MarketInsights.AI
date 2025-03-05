from sklearn.ensemble import IsolationForest
import pandas as pd

class FraudDetection:
    def __init__(self, data):
        self.data = data

    def detect_fraud(self):
        model = IsolationForest(contamination=0.01)
        model.fit(self.data)
        anomalies = model.predict(self.data)
        self.data['fraud'] = anomalies
        return self.data