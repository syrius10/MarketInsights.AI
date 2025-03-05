from sklearn.ensemble import GradientBoostingRegressor, RandomForestRegressor
from fbprophet import Prophet

class AdvancedPredictiveModels:
    def __init__(self):
        pass

    def train_gradient_boosting(self, data, target):
        model = GradientBoostingRegressor()
        model.fit(data, target)
        return model

    def train_random_forest(self, data, target):
        model = RandomForestRegressor()
        model.fit(data, target)
        return model

    def train_prophet(self, data):
        df = data[['ds', 'y']]
        model = Prophet()
        model.fit(df)
        return model

    def predict_gradient_boosting(self, model, data):
        return model.predict(data).tolist()

    def predict_random_forest(self, model, data):
        return model.predict(data).tolist()

    def predict_prophet(self, model, future):
        forecast = model.predict(future)
        return forecast[['ds', 'yhat']].to_dict(orient='records')