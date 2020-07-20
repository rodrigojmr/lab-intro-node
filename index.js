class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    const indexOfPos = this.items.indexOf(pos);
    if (indexOfPos === -1) {
      throw new Error('OutOfBounds');
    } else return indexOfPos;
  }

  max() {
    if (this.length) {
      return Math.max(...this.items);
    } else throw new Error('EmptySortedList');
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    } else throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length;
    } else throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
