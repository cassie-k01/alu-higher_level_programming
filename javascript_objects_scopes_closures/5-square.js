#!/usr/bin/node

class Square extends Rectangle {
  constructor(size) {
    if (Number.isInteger(size) && size > 0) {
      super(size, size);
    } else {
      console.log("Error: Invalid square size. Must be a positive integer.");
      super(undefined, undefined);
    }
  }
}
