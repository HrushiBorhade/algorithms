class AsyncQueueNode {
  task?: () => Promise<void>;
  next?: AsyncQueueNode;

  constructor(task: () => Promise<void>) {
    this.task = task;
  }
}

class AsyncRequestQueue {
  private head?: AsyncQueueNode;
  private tail?: AsyncQueueNode;
  private activeCount = 0;
  private maxConcurrent = 3;

  constructor(max: number) {
    this.maxConcurrent = max;
  }

  public addTask(task: () => Promise<void>) {
    const newNode = new AsyncQueueNode(task);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.processQueue();
  }

  public async processQueue() {
    if (this.activeCount < this.maxConcurrent && this.head) {
      const node = this.head;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = undefined; // Reset tail if queue is empty
      }

      this.activeCount++;

      try {
        await node.task!();
      } catch (err) {
        console.error('Task failed', err);
      } finally {
        this.activeCount--;
        this.processQueue(); // Process next task in the queue
      }
    }
  }
}


class AsyncRequestQueueArray {
  private queue: (() => Promise<void>)[] = [];
  private activeCount: number = 0;
  private maxConcurrent: number = 3;

  constructor(maxConcurrent: number = 3) {
    this.maxConcurrent = maxConcurrent;
  }

  public addTask(task: () => Promise<void>) {
    this.queue.push(task);
    this.processQueue();
  }

  private async processQueue() {
    if (this.activeCount < this.maxConcurrent && this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        this.activeCount++;
        try {
          await task();
        } catch (error) {
          console.error("Task failed:", error);
        } finally {
          this.activeCount--;
          this.processQueue();
        }
      }
    }
  }
}

const queue = new AsyncRequestQueueArray(3);
const queue2 = new AsyncRequestQueue(3);
function createTask(id: number) {
  return async () => {
    console.log(`Task ${id} started`);
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 10000)),
    );
    console.log(`Task ${id} completed`);
  };
}

console.log("Queue 1");
Array.from({ length: 10 }, (_, i) => createTask(i + 1)).forEach((task) => {
  queue.addTask(task);
});

console.log("Queue 2");
Array.from({ length: 10 }, (_, i) => createTask(i + 1)).forEach((task) => {
  queue2.addTask(task);
});
