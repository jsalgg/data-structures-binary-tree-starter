// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root){
    let arr = [];

    if (root !== null) {
        arr.push(root.val)
        let left = dfs(root.left)
        let right = dfs(root.right);
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

module.exports = { dfs };
