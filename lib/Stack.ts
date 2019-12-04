import {IDataScructure} from "./IDataStructure";

export class Stack implements IDataScructure {

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
        return this.store.filter(x => true).pop();
    }

    poll() {
        return this.store.pop();
    }

}
