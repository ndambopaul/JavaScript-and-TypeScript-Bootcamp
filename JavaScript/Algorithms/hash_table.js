class HashTable {
    constructor(size = 100){
        this.size = size;
        this.items = new Array(size);
    }

    hash_function(key) {
        let hash = 0;
        for (let i = 0; i < this.items.length, i++;) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash_function(key);
        if(!this.items[index]) {
            this.items[index] = [];
        }
        this.items[index].push([key, value]);
    }

    get(key) {
        // key -> apple
        // value -> 10
        const index = this.hash_function(key);

        if(!this.items[index]) return undefined;

        for(let pair of this.items[index]) {
            if(pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }

    delete(key) {
        let index = this.hash_function(key);
        if(!this.items[index]) return undefined;

        for (let i = 0; i < this.items[index].length, i++;) {
            if(this.items[index][i][0] === key) {
                return this.items.slice(i,1);
            }
        }
        return undefined;
    }
}