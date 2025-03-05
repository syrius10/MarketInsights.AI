import numpy as np

class CompetitorAnalysis:
    def __init__(self, data):
        self.data = data

    def compare_prices(self, competitor_prices):
        avg_prices = {k: np.mean(v) for k, v in competitor_prices.items()}
        return avg_prices

    def run(self):
        competitor_prices = self.data.get('competitor_prices', {})
        if not competitor_prices:
            return {"error": "No competitor prices provided"}

        avg_prices = self.compare_prices(competitor_prices)
        return {
            "status": "Competitor analysis completed successfully",
            "average_competitor_prices": avg_prices
        }