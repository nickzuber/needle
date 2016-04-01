/// <reference path="../../src/modern/needle.d.ts"/>

import * as Needle from "../../src/needle";

class Map extends Needle.Hashmap {
  constructor() {
    super();
  }

  resolveScope() {
    console.log(this);
  }
}

var myMap = new Map();

console.log(myMap.resolveScope());