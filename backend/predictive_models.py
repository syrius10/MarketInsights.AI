import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.cluster import KMeans

class PredictiveModels:
    def __init__(self):
        pass

    def train_lstm(self, data):
        data = np.array(data).reshape(-1, 1)
        X, y = data[:-1], data[1:]
        X = X.reshape((X.shape[0], 1, X.shape[1]))

        model = Sequential()
        model.add(LSTM(50, activation='relu', input_shape=(1, 1)))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mse')

        model.fit(X, y, epochs=300, verbose=0)
        return model

    def predict_lstm(self, model, data):
        data = np.array(data).reshape(-1, 1)
        X = data.reshape((data.shape[0], 1, data.shape[1]))
        predictions = model.predict(X, verbose=0)
        return predictions.flatten().tolist()

    def customer_segmentation(self, data, n_clusters):
        kmeans = KMeans(n_clusters=n_clusters)
        kmeans.fit(data)
        return kmeans.labels_.tolist()