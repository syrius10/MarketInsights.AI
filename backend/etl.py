import pandas as pd

class ETL:
    def __init__(self):
        self.pipelines = {}

    def create_pipeline(self, name, steps):
        self.pipelines[name] = steps

    def run_pipeline(self, name, data):
        if name not in self.pipelines:
            raise ValueError("Pipeline not found")
        for step in self.pipelines[name]:
            data = step(data)
        return data

def extract_data():
    # Placeholder for data extraction logic
    return pd.DataFrame()

def transform_data(data):
    # Placeholder for data transformation logic
    return data

def load_data(data):
    # Placeholder for data loading logic
    return data