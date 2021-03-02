// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    let arr = [root.val];
    // arr.push(root.val)
    if(root === null) return;
    if(root.left !== null){
        arr.push(root.left.val)
    }
    if(root.right !== null) {
        arr.push(root.right.val)
    }
    arr.concat(bfs(root.left))
    arr.concat(bfs(root.right))
    console.log(arr)
    return arr;
}



module.exports = { bfs };
