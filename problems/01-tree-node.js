// Implement a class that takes a value
// and constructs a valid binary tree node
class TreeNode {
  // Your code here
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    // this.root = null;
  }
  preOrderArray(node) {
    //self, left, right
    //root node
    //check if left
    //down left
    //repeat
    let arr = [];

    if (node !== null) {
        arr.push(node.val)
        let left = this.preOrderArray(node.left)
        let right = this.preOrderArray(node.right);
        if(left === undefined){
            left = [];
        }
        if(right === undefined) {
            right = [];
        }
        return arr.concat(left).concat(right)
    };
  }
}
// root = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// root.left = b;
// root.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(root.preOrderArray(root))
module.exports = {
  TreeNode,
};
