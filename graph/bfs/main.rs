// breadth first search traversal

use std::collections::VecDeque;

fn bfs(graph: &Vec<Vec<u32>>, start:u32, visited: &mut Vec<bool>, path: &mut Vec<u32>) {
    let mut queue: VecDeque<u32> = VecDeque::new();
    queue.push_back(start);
    visited[start as usize] = true;

    while !queue.is_empty() {
        let node = queue.pop_front().unwrap();
        path.push(node);
        for neighbor in &graph[node as usize] {
            if !visited[*neighbor as usize] {
                visited[*neighbor as usize] = true;
                queue.push_back(*neighbor);                
            }
        }
    }
}

fn main() {
    let graph = vec![
        vec![1, 2],
        vec![0, 2, 4],
        vec![0, 1, 3],
        vec![2, 6],
        vec![1, 5],
        vec![4, 6],
        vec![3, 5],
    ];

    let mut visited = vec![false; graph.len()];
    let mut path = vec![];
    let start = 0;
    bfs(&graph, start, &mut visited, &mut path);
    println!("BFS path: {:?}", path);
}