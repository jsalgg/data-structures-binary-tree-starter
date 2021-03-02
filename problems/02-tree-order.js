// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root) {
    let arr = [];

    if (root !== null) {
        arr.push(root.val)
        let left = preOrderArray(root.left)
        let right = preOrderArray(root.right);
        if(left === undefined){
            left = [];
        }
        if(right === undefined) {
            right = [];
        }
        return arr.concat(left).concat(right)
    };
    return arr;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    let arr = [];

    if (root !== null) {
        let left = inOrderArray(root.left)
        let self = root.val
        let right = inOrderArray(root.right);
        if(left === undefined){
            left = [];
        }
        if(right === undefined) {
            right = [];
        }
        // console.log(arr.concat(left).concat(right))
        return arr.concat(left).concat(self).concat(right)
    };
    return arr;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    let arr = [];

    if (root !== null) {
        let left = postOrderArray(root.left)
        let right = postOrderArray(root.right);
        let self = root.val
        if(left === undefined){
            left = [];
        }
        if(right === undefined) {
            right = [];
        }
        // console.log(arr.concat(left).concat(right))
        return arr.concat(left).concat(right).concat(self)
    };
    return arr;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
