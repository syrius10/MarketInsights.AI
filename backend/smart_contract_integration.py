from web3 import Web3

class SmartContract:
    def __init__(self, contract_address, abi):
        self.web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))
        self.contract = self.web3.eth.contract(address=contract_address, abi=abi)

    def execute_transaction(self, function_name, *args):
        tx = self.contract.functions[function_name](*args).buildTransaction({
            'chainId': 1,
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei'),
            'nonce': self.web3.eth.getTransactionCount(self.web3.eth.defaultAccount),
        })
        signed_tx = self.web3.eth.account.sign_transaction(tx, private_key="YOUR_PRIVATE_KEY")
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction)
        return tx_hash.hex()