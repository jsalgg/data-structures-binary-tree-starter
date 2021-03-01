// Implement a class that takes a value
// and constructs a valid binary tree node
class TreeNode {
  // Your code here
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.root = null;
  }
  preOrderArray(node) {
    //self, left, right
    //root node
    //check if left
    //down left
    //repeat
    let arr = [];
    if (!this.node) console.log("HERE");
    if (this.node.left !== null) {
      arr.push(this.preOrderArray(this.node.left));
    } else if (this.node.right !== null) {
      arr.push(this.preOrderArray(this.node.right));
    }
    this.preOrderArray(this.node.left);

    console.log(arr, "here");
  }
}

module.exports = {
  TreeNode,
};
