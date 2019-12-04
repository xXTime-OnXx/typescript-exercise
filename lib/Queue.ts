import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private store: [] = [];

    public size(): number {
        return this.store.length;
    }

    enqueue(value) {
        this.store.push(<never>value);
    }

    isEmpty(): boolean {
        return false;
    }

    peek() {
    }

    poll() {
    }
}
