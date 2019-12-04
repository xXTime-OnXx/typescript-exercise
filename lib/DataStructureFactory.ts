import {DataStructures} from "./DataStructures";
import {Queue} from "./Queue";
import {Stack} from "./Stack";

export class DataStructureFactory {
    public static create(dataStructure: DataStructures) {
        switch (dataStructure) {
            case DataStructures.Queue:
                return new Queue();
            case DataStructures.Stack:
                return new Stack();
        }
    }
}
