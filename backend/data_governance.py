import pandas as pd

class DataGovernance:
    def __init__(self):
        self.data_catalog = {}

    def track_lineage(self, data_source, transformations):
        lineage = {"source": data_source, "transformations": transformations}
        self.data_catalog[data_source] = lineage

    def get_lineage(self, data_source):
        return self.data_catalog.get(data_source, None)

    def add_metadata(self, data_source, metadata):
        if data_source in self.data_catalog:
            self.data_catalog[data_source]["metadata"] = metadata