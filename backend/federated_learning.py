import numpy as np
from tensorflow import keras
import tensorflow_federated as tff

class FederatedLearning:
    def __init__(self, model_fn, client_data):
        self.model_fn = model_fn
        self.client_data = client_data

    def create_federated_averaging_process(self):
        iterative_process = tff.learning.build_federated_averaging_process(
            self.model_fn,
            client_optimizer_fn=lambda: keras.optimizers.SGD(learning_rate=0.02),
            server_optimizer_fn=lambda: keras.optimizers.SGD(learning_rate=1.0)
        )
        return iterative_process

    def train(self, rounds=10):
        iterative_process = self.create_federated_averaging_process()
        state = iterative_process.initialize()
        for round_num in range(1, rounds + 1):
            state, metrics = iterative_process.next(state, self.client_data)
            print(f'Round {round_num}: {metrics}')
        return state