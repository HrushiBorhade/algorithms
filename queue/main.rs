use std::fmt::Debug;
use std::rc::Rc;
use std::cell::RefCell;

// Node structure for the linked list
type NodeRef<T> = Option<Rc<RefCell<Node<T>>>>;

struct Node<T> {
    value: T,
    next: NodeRef<T>,
}

impl<T> Node<T> {
    fn new(value: T) -> Self {
        Node {
            value,
            next: None,
        }
    }
}

// Queue implementation using a linked list
pub struct Queue<T> {
    head: NodeRef<T>,
    tail: NodeRef<T>,
    size: usize,
}

impl<T> Queue<T> 
where
    T: Clone + Debug,
{
    // Create a new empty queue
    pub fn new() -> Self {
        Queue {
            head: None,
            tail: None,
            size: 0,
        }
    }

    // Add an element to the end of the queue
    pub fn enqueue(&mut self, value: T) {
        let new_node = Rc::new(RefCell::new(Node::new(value)));
        
        match self.tail.take() {
            Some(old_tail) => {
                // If queue is not empty, update the current tail's next pointer
                old_tail.borrow_mut().next = Some(Rc::clone(&new_node));
                self.tail = Some(new_node);
            },
            None => {
                // If queue is empty, set both head and tail to the new node
                self.head = Some(Rc::clone(&new_node));
                self.tail = Some(new_node);
            }
        }
        
        self.size += 1;
    }

    // Remove and return the first element from the queue
    pub fn dequeue(&mut self) -> Option<T> {
        self.head.take().map(|head_node| {
            // Get the value from the head
            let value = head_node.borrow().value.clone();
            
            // Update the head to point to the next node
            self.head = head_node.borrow_mut().next.take().map(|next_node| Rc::clone(&next_node));
            
            // If head is None, tail should also be None
            if self.head.is_none() {
                self.tail = None;
            }
            
            self.size -= 1;
            value
        })
    }

    // View the first element without removing it
    pub fn peek(&self) -> Option<T> {
        self.head.as_ref().map(|node| node.borrow().value.clone())
    }

    // Get the current size of the queue
    pub fn get_size(&self) -> usize {
        self.size
    }

    // Check if the queue is empty
    pub fn is_empty(&self) -> bool {
        self.size == 0
    }
}

// Example usage
fn main() {
    let mut queue: Queue<i32> = Queue::new();
    
    // Add elements
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    
    println!("Queue size: {}", queue.get_size());
    println!("Front element: {:?}", queue.peek());
    
    // Process queue
    while !queue.is_empty() {
        if let Some(item) = queue.dequeue() {
            println!("Processed: {}", item);
        }
    }
    
    println!("Final queue size: {}", queue.get_size());
}
