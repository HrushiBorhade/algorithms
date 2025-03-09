#[derive(Debug,Clone)]
struct GraphEdge {
    to: String,
    weight: u32,
}

type WeightedAdjacencyList = Vec<Vec<GraphEdge>>;
type WeightedAdjacencyMatrix = Vec<Vec<u32>>;

fn main() {
    // Undirected graph with adjacency list
    let mut weighted_adjacency_list_undirected: WeightedAdjacencyList = vec![vec![]; 7];

    weighted_adjacency_list_undirected[0] = vec![
        GraphEdge { to: "1".to_string(), weight: 3 },
        GraphEdge { to: "2".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_undirected[1] = vec![
        GraphEdge { to: "0".to_string(), weight: 3 },
        GraphEdge { to: "2".to_string(), weight: 4 },
        GraphEdge { to: "4".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_undirected[2] = vec![
        GraphEdge { to: "0".to_string(), weight: 1 },
        GraphEdge { to: "1".to_string(), weight: 4 },
        GraphEdge { to: "3".to_string(), weight: 7 },
    ];
    weighted_adjacency_list_undirected[3] = vec![
        GraphEdge { to: "2".to_string(), weight: 7 },
        GraphEdge { to: "6".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_undirected[4] = vec![
        GraphEdge { to: "1".to_string(), weight: 1 },
        GraphEdge { to: "5".to_string(), weight: 2 },
    ];
    weighted_adjacency_list_undirected[5] = vec![
        GraphEdge { to: "4".to_string(), weight: 2 },
        GraphEdge { to: "6".to_string(), weight: 9 },
    ];
    weighted_adjacency_list_undirected[6] = vec![
        GraphEdge { to: "3".to_string(), weight: 1 },
        GraphEdge { to: "5".to_string(), weight: 9 },
    ];

    println!("{:?}", weighted_adjacency_list_undirected);

    // Undirected graph with adjacency matrix
    let weighted_adjacency_matrix_undirected: WeightedAdjacencyMatrix = vec![
        vec![0, 3, 1, 0, 0, 0, 0],
        vec![3, 0, 4, 0, 1, 0, 0],
        vec![1, 4, 0, 7, 0, 0, 0],
        vec![0, 0, 7, 0, 0, 0, 1],
        vec![0, 1, 0, 0, 0, 2, 0],
        vec![0, 0, 0, 0, 2, 0, 9],
        vec![0, 0, 0, 1, 0, 9, 0],
    ];

    println!("{:?}", weighted_adjacency_matrix_undirected);

    // Directed graph with adjacency list
    let mut weighted_adjacency_list_directed: WeightedAdjacencyList = vec![vec![]; 7];

    weighted_adjacency_list_directed[0] = vec![
        GraphEdge { to: "1".to_string(), weight: 3 },
        GraphEdge { to: "2".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_directed[1] = vec![
        GraphEdge { to: "4".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_directed[2] = vec![
        GraphEdge { to: "3".to_string(), weight: 7 },
    ];
    weighted_adjacency_list_directed[3] = vec![
        GraphEdge { to: "6".to_string(), weight: 1 },
    ];
    weighted_adjacency_list_directed[4] = vec![
        GraphEdge { to: "5".to_string(), weight: 2 },
    ];

    println!("{:?}", weighted_adjacency_list_directed);

    // Directed graph with adjacency matrix
    let weighted_adjacency_matrix_directed: WeightedAdjacencyMatrix = vec![
        vec![0, 3, 1, 0, 0, 0, 0],
        vec![0, 0, 0, 0, 1, 0, 0],
        vec![0, 0, 0, 7, 0, 0, 0],
        vec![0, 0, 0, 0, 0, 2, 0],
        vec![0, 0, 0, 0, 0, 0, 9],
        vec![0, 0, 0, 0, 0, 0, 1],
    ];

    println!("{:?}", weighted_adjacency_matrix_directed);
}
