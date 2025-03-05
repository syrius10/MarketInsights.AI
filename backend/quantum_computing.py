from qiskit import Aer, transpile, assemble, execute
from qiskit.visualization import plot_histogram

class QuantumComputing:
    def __init__(self, circuit):
        self.circuit = circuit

    def run_simulation(self):
        simulator = Aer.get_backend('qasm_simulator')
        compiled_circuit = transpile(self.circuit, simulator)
        qobj = assemble(compiled_circuit)
        result = simulator.run(qobj).result()
        counts = result.get_counts()
        return counts

    def visualize_results(self, counts):
        plot_histogram(counts)