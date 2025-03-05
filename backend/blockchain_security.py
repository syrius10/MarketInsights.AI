import hashlib

class Blockchain:
    def __init__(self):
        self.chain = []

    def create_block(self, data, previous_hash):
        block = {
            'data': data,
            'previous_hash': previous_hash,
            'hash': self.hash(data + previous_hash)
        }
        self.chain.append(block)
        return block

    def hash(self, data):
        return hashlib.sha256(data.encode()).hexdigest()

    def get_last_block(self):
        return self.chain[-1]