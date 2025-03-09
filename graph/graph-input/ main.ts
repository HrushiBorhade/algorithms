export type GraphEdge = {
    to: string;
    weight: number;
}

export type WeightedAdjacencyList = GraphEdge[][];

type WeightedAdjacencyMatrix = number[][];

const weightedAdjacencyListUndirected: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)

weightedAdjacencyListUndirected[0] = [{ to: "1", weight: 3 }, { to: "2", weight: 1 }];
weightedAdjacencyListUndirected[1] = [{ to: "0", weight: 3 }, { to: "2", weight: 4 }, { to: "4", weight: 1 }];
weightedAdjacencyListUndirected[2] = [{ to: "0", weight: 1 }, { to: "1", weight: 4 }, { to: "3", weight: 7 }];
weightedAdjacencyListUndirected[3] = [{ to: "2", weight: 7 }, { to: "6", weight: 1 }];
weightedAdjacencyListUndirected[4] = [{ to: "1", weight: 1 }, { to: "5", weight: 2 }];
weightedAdjacencyListUndirected[5] = [{ to: "4", weight: 2 }, { to: "6", weight: 9 }];
weightedAdjacencyListUndirected[6] = [{ to: "3", weight: 1 }, { to: "5", weight: 9 }];

console.log(weightedAdjacencyListUndirected);

const weightedAdjacencyMatrixUndirected: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0],
    [3, 0, 4, 0, 1, 0, 0],
    [1, 4, 0, 7, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 2, 0],
];

console.log(weightedAdjacencyMatrixUndirected);

const weightedAdjacencyListDirected: WeightedAdjacencyList = [];

//      (1) --> (4) --> (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --> (3) --> (6)

weightedAdjacencyListDirected[0] = [{ to: "1", weight: 3 }, { to: "2", weight: 1 }];
weightedAdjacencyListDirected[1] = [{ to: "4", weight: 1 }];
weightedAdjacencyListDirected[2] = [{ to: "3", weight: 7 }];
weightedAdjacencyListDirected[3] = [{ to: "6", weight: 1 }];
weightedAdjacencyListDirected[4] = [{ to: "5", weight: 2 }];

console.log(weightedAdjacencyListDirected);

const weightedAdjacencyMatrixDirected: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 1],
];

console.log(weightedAdjacencyMatrixDirected);
    