import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private store: any[] = [];

    public size(): number {
        return this.store.length;
    }

    enqueue(value) {
        this.store.push(value)
    }

    isEmpty(): boolean {
        return this.store.length == 0;
    }

    peek() {
        return this.store.filter(x => true).shift();
    }

    poll() {
        return this.store.shift();
    }
}
