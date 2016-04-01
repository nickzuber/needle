/**
 * TypeScript Needle definition file.
 * Forms the object.
 */

declare module 'Needle' {
  export class SinglyLinkedList {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class Queue {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class Stack {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class DoublyLinkedList {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class BinaryHeap {
    // Public Members
    heap: Array<any>;
    compare: Function;

    constructor(compare?);
    peek(): Number;
    size(): Number;
    insert(data: any): void;
    delete(i: Number): void;
    heapify(arr: Array<any>): void;

    // Private Members
    private defaultCompare(a: any, b: any): boolean;
    private safeCompare(a: any, b: any, callback: Function): boolean;
  }

  export class BinarySearchTree {
    // Public Members
    root: Node;
    compare: Function;

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

    // Private Members
    private defaultCompare(a: any, b: any): boolean;
    private safeCompare(a: any, b: any, callback: Function): boolean;
  }

  export class Hashmap {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class SortedArray {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class RollingHash {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }

  export class BitArray {
    // Public Members
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
  }

  export class KaryTree {
    size: Number;
    data: Array<Number>;

    constructor(size?);
    set(index: Number, value: boolean): void;
    get(index: Number): Number;
    size(): Number;
    resize(size: Number): void;
    complement(BitArray?): BitArray;
    union(BitArray?): BitArray;
    intersection(BitArray?): BitArray;
    difference(BitArray?): BitArray;

    // Private Members
    private shred(n: any): Number;
    private INTEGER_SIZE: Number;
    private INT_MIN: Number;
    private INT_MAX: Number;
    // Public Members

    // Private Members
  }
}