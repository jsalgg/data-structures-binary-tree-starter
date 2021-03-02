// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./01-tree-node.js");

function buildTree(preorder, inorder) {
  //preorder - root left right
  //in order - left root right
  if (inorder.length) {
    //find in the inorder list where preorder[0] exists
    //preorder[0] === root
    let idx = inorder.indexOf(preorder.shift());
    //set root node
    const root = new TreeNode(inorder[idx]);
    //everything before the root is left
    let left = inorder.slice(0, idx);
    if (left.length === 0) root.left = null;
    else root.left = buildTree(preorder, left);
    //after root is right
    let right = inorder.slice(idx + 1);
    if (right.length === 0) root.right = null;
    else root.right = buildTree(preorder, right);
    return root;
  }
}
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
