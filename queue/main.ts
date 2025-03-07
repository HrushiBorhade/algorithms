class QueueNode<T> {
    value?:T;
    next?:QueueNode<T>;

    constructor(value?:T){
        this.value = value;
        this.next = undefined;
    }
}


class Queue<T> {
    private head?:QueueNode<T>;
    private tail?:QueueNode<T>;
    private size:number;

    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;  
    }

    enqueue(value:T) {
        const node = new QueueNode(value);
        if(!this.tail){
            this.head = node;
            this.tail = node;
        }else{
         this.tail.next = node;
         this.tail = node;    
        }
        this.size++;
    }

    dequeue():T | undefined {
        if(!this.head){
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek():T | undefined {
        return this.head?.value;
    }

    isEmpty():boolean {
        return this.size === 0;
    }

    getSize():number {
        return this.size;
    }
}


function main() {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.dequeue());
    console.log(queue.peek());
    console.log(queue.isEmpty());
    console.log(queue.getSize());
}

main();