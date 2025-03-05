from sklearn.neighbors import NearestNeighbors
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

class PersonalizedRecommendations:
    def __init__(self, user_profiles, item_features):
        self.user_profiles = user_profiles
        self.item_features = item_features
        self.model = NearestNeighbors(metric='cosine')

    def fit(self):
        vectorizer = TfidfVectorizer()
        item_matrix = vectorizer.fit_transform(self.item_features)
        self.model.fit(item_matrix)

    def recommend(self, user_profile):
        vectorizer = TfidfVectorizer()
        user_matrix = vectorizer.fit_transform([user_profile])
        distances, indices = self.model.kneighbors(user_matrix)
        recommendations = [self.item_features[i] for i in indices.flatten()]
        return recommendations