/**
 * TypeScript Needle definition file.
 * Forms the object.
 */

declare module 'Needle' {
  export class SinglyLinkedList {
    //
  }

  export class Queue {
    //
  }

  export class Stack {
    //
  }

  export class DoublyLinkedList {
    //
  }

  export class BinaryHeap {
    // Public Members
    heap: Array<any>;
    compare: Function;

    // Public functions
    constructor(compare?);
    peek(): Number;
    size(): Number;
    insert(data: any): void;
    delete(i: Number): void;
    heapify(arr: Array<any>): void;

    // Private functions
    private defaultCompare(a: any, b: any): boolean;
    private safeCompare(a: any, b: any, callback: Function): boolean;
  }

  export class BinarySearchTree {
    // Public Members
    root: Node;
    compare: Function;

    // Public functions
    constructor(compare?);
    hasRight(node: Node): boolean;
    hashLeft(node: Node): boolean;
    isLeaf(node: Node): boolean;
    emptySubtree(node: Node): void;
    emptyTree(): void;
    heightSubtree(node: Node): Number;
    numNodesSubtree(node: Node): Number;
    numLeavesSubtree(node: Node): Number;
    insert(data: any): void;
    search(data: any): Node;

    // Private functions
    private defaultCompare(a: any, b: any): boolean;
    private safeCompare(a: any, b: any, callback: Function): boolean;
  }

  export class Hashmap {
    //
  }

  export class SortedArray {
    //
  }

  export class RollingHash {
    //
  }

  export class BitArray {
    //
  }

  export class KaryTree {
    //
  }
}