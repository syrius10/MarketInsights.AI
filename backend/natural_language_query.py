import openai

class NaturalLanguageQuery:
    def __init__(self, api_key):
        openai.api_key = api_key

    def query(self, question):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=question,
            max_tokens=100
        )
        return response.choices[0].text.strip()