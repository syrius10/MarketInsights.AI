import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier

class HealthcareAnalytics:
    def __init__(self, data):
        self.data = data

    def predict_outcomes(self):
        X = self.data.drop('outcome', axis=1)
        y = self.data['outcome']
        model = GradientBoostingClassifier()
        model.fit(X, y)
        predictions = model.predict(X)
        self.data['predicted_outcomes'] = predictions
        return self.data

    def early_diagnosis(self):
        # Placeholder for early diagnosis logic
        diagnosis = self.data
        return diagnosis