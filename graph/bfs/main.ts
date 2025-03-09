// breadth first search traversal
type GraphEdge = {
    to:number,
    weight:number
}

type WeightedAdjacencyList = GraphEdge[][];

function bfs(graph: WeightedAdjacencyList, start: number, visited: boolean[], path: number[]) {
    console.log("Starting BFS");
    const queue : number[] = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        console.log("Visiting node", node);
        if (node === undefined) {
            continue;
        }
        path.push(node);
        for (const edge of graph[node]) {
            if (!visited[edge.to]) {
                visited[edge.to] = true;
                queue.push(edge.to);
            }
        }
    }
}

const graph: WeightedAdjacencyList = [];

graph[0] = [{ to: 1, weight: 3 }, { to: 2, weight: 1 }];
graph[1] = [{ to: 0, weight: 3 }, { to: 2, weight: 4 }, { to: 4, weight: 1 }];
graph[2] = [{ to: 0, weight: 1 }, { to: 1, weight: 4 }, { to: 3, weight: 7 }];
graph[3] = [{ to: 2, weight: 7 }, { to: 6, weight: 1 }];
graph[4] = [{ to: 1, weight: 1 }, { to: 5, weight: 2 }];
graph[5] = [{ to: 4, weight: 2 }, { to: 6, weight: 9 }];
graph[6] = [{ to: 3, weight: 1 }, { to: 5, weight: 9 }];

const visited: boolean[] = new Array(graph.length).fill(false);
const path: number[] = [];
const start = 0;

bfs(graph, start, visited, path);

console.log(path);
