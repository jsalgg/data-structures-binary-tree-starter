// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root) {
  let arr = new Array();
  if (root === null) return arr;
  //lets make a queue - fifo
  //stsrt queue
  class _queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    remove() {
      if (this.length === 0) return null;
      const oldHead = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;
      return oldHead;
    }
    add(node) {
      if (!this.length) {
        this.head = node;
        this.tail = node;
        this.head.next = this.tail;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
    }
    size = () => this.length;
  } //end queue
  const queue = new _queue();
  queue.add(root);
  while (queue.length) {
    //while we have levels left
    let size = queue.size();
    for (let i = 0; i < size; i++) {
      //for all items on the level
      let current = queue.remove();
      arr.push(current.val);
      //cheking if the current node has children and adding to queue because fifo
      if (current.left !== null) {
        queue.add(current.left);
      }
      if (current.right !== null) {
        queue.add(current.right);
      }
    }
  }
  return arr;
}

module.exports = { bfs };
