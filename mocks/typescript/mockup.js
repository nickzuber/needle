/// <reference path="../../src/modern/needle.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Needle = require("../../src/needle");
var SinglyLinkedList = new Needle.SinglyLinkedList();
var Queue = new Needle.SinglyLinkedList();
var Stack = new Needle.SinglyLinkedList();
var DoublyLinkedList = new Needle.SinglyLinkedList();
var BinaryHeap = new Needle.SinglyLinkedList();
var BinarySearchTree = new Needle.SinglyLinkedList();
var Hashmap = new Needle.SinglyLinkedList();
var SortedArray = new Needle.SinglyLinkedList();
var RollingHash = new Needle.SinglyLinkedList();
var BitArray = new Needle.SinglyLinkedList();
var KaryTree = new Needle.SinglyLinkedList();
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.call(this);
    }
    List.prototype.test = function () {
        console.log('hello');
    };
    return List;
}(Needle.SinglyLinkedList));
var test = new List();
console.log(test.test());
