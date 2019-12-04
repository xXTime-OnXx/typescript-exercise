import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        });

        it("has item", () => {
            const testee = new Queue();
            testee.enqueue("first");
            const result = testee.size();
            expect(result).to.equal(1);
        });

        it("has enqueue item", () => {
            const testee = new Queue();
            const enqueueItem = "first";
            testee.enqueue(enqueueItem);
            const result = testee.peek();
            expect(result).to.equal(enqueueItem);
        });

        it("remove item", () => {
            const testee = new Queue();
            const enqueueItem = "first";
            testee.enqueue(enqueueItem);
            const result = testee.poll();
            expect(result).to.equal(enqueueItem);
            expect(testee.size()).to.equal(0);
        });

        it("is empty", () => {
            const testee = new Queue();
            expect(testee.isEmpty()).to.be.true;
        });
    });

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
});
