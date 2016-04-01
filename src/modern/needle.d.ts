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
    heap: Array<any>;
    compare: Function;
    constructor(compare?);
    peek(): Number;
    size(): Number;
    insert(data: any): void;
  }
  export class BinarySearchTree {
    //
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