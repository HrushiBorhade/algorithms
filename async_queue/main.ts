class AsyncRequestQueue {
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

const queue = new AsyncRequestQueue(3);

function createTask(id: number) {
  return async () => {
    console.log(`Task ${id} started`);
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 10000))
    );
    console.log(`Task ${id} completed`);
  };
}

Array.from({ length: 10 }, (_, i) => createTask(i + 1)).forEach((task) => {
  queue.addTask(task);
});
