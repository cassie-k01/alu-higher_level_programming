#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      console.log('Error: Invalid width or height. Must be positive integers.');
      this.width = 0; // Defaulting to 0 instead of undefined
      this.height = 0;
    }
  }

  print () {
    if (this.width > 0 && this.height > 0) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    } else {
      console.log('Error: Cannot print an invalid rectangle.');
    }
  }

  rotate () {
    if (this.width > 0 && this.height > 0) {
      [this.width, this.height] = [this.height, this.width];
    }
  }

  double () {
    if (this.width > 0 && this.height > 0) {
      this.width *= 2;
      this.height *= 2;
    }
  }
}
module.exports = Rectangle;
