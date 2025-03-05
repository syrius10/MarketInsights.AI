import spacy

class LegalDocumentAnalysis:
    def __init__(self, document):
        self.document = document
        self.nlp = spacy.load('en_core_web_sm')

    def analyze(self):
        doc = self.nlp(self.document)
        entities = [(ent.text, ent.label_) for ent in doc.ents]
        return entities