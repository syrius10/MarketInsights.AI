from ortools.linear_solver import pywraplp

class SupplyChainOptimization:
    def __init__(self, demand, supply, costs):
        self.demand = demand
        self.supply = supply
        self.costs = costs

    def optimize(self):
        solver = pywraplp.Solver.CreateSolver('GLOP')
        x = {}
        for i in range(len(self.supply)):
            for j in range(len(self.demand)):
                x[i, j] = solver.NumVar(0, solver.infinity(), '')

        for i in range(len(self.supply)):
            solver.Add(sum(x[i, j] for j in range(len(self.demand))) <= self.supply[i])

        for j in range(len(self.demand)):
            solver.Add(sum(x[i, j] for i in range(len(self.supply))) >= self.demand[j])

        objective = solver.Objective()
        for i in range(len(self.supply)):
            for j in range(len(self.demand)):
                objective.SetCoefficient(x[i, j], self.costs[i][j])
        objective.SetMinimization()

        solver.Solve()
        return {(i, j): x[i, j].solution_value() for i in range(len(self.supply)) for j in range(len(self.demand))}