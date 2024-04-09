class Queue {
    constructor(){
        this.items = [];
    }

    is_empty() {
        return this.items.length === 0;
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        if (!this.is_empty()) {
            this.items.shift();
        }
    }

    peek() {
        if (!this.is_empty()) {
            console.log(this.items[0])
        }
    }

    size() {
        console.log(this.items.length)
    }

    clear() {
        this.items = [];
    }

    print_queue() {
        console.log(this.items)
    }
}



const queue = new Queue();
console.log(queue.is_empty())
queue.enqueue("James")
queue.enqueue("John")
queue.enqueue("Irene")
queue.enqueue("Smith")

queue.print_queue()
queue.dequeue()
queue.size()
