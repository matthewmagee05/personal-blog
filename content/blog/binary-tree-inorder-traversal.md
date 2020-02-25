---
path: /
date: 2020-02-25T02:11:58.909Z
title: Binary Tree In-Order Traversal
description: Looking over how to implement Inorder traversal using JavaScript
---
Today I'm going to quickly talk about implementing Inorder Traversal on a Binary Tree. Inorder Traversal means to traverse the left subtree first, then visit the root. Then, visit the right subtree.

Here's a diagram explaining it:

![](/assets/Tree-Traversals-Inorder.png)

So today the problem I am trying to solve is: Given a binary tree, return the *inorder* traversal of its nodes' values. Below is my recursive solution to the problem:

```javascript
let inorderTraversal = function(root) {
  let results = []
  helper(root, results)
  return results
}

function helper(root, results) {
  if (root !== null) {
    if (root.left != null) {
      helper(root.left, results)
    }
    results.push(root.val)
    if (root.right != null) {
      helper(root.right, results)
    }
  }
}
```

We create a function which takes as a value the root of a Binary Tree. We create an array which will store our list of values called result on line #2. We make a call to the helper function, discussed later on, passing in the root and the results array as arguments. Finally we return the results array.

So, let's get into the meat of the algorithm, the helper function.

Let's pretend for this example our Binary Tree structure looks like so:

```json
TreeNode {
  val: 1,
  right:
      TreeNode {
       val: 2,
       right: null,
       left: TreeNode {
               val: 3,
               right: null,
               left: null
              }
      },
  left: null
  }
```

So when we first break into the helper function, our root is not null, because it looks like the above structure. Now remember, we traverse the left subtree first, then visit the root. So, on line 9 on our helper function that's exactly what we do, but in this case, our left subtree is null. So, we go back to the root and add the value, which in this case is 1 to our results array on line 12.

Next, we check if we have a right subtree, which we do. So we recursively call our helper function again passing in our right subtree as well as the results array. Now our tree will look like this:

```json
TreeNode {
       val: 2,
       right: null,
       left: TreeNode {
               val: 3,
               right: null,
               left: null
              }
      },
```

So we repeat the same process. We start with the left subtree, which this has a value, and so we call our helper function again, passing in the left subtree and our results array. Our tree will now look like so:

```json
TreeNode {
         val: 3,
         right: null,
         left: null
  }
```

So our left subtree is null, so we add the value 3 into our results array. Our right node is also empty, so we would then go back to our previous tree structure that looks like this:

```json
TreeNode {
       val: 2,
       right: null,
       left: TreeNode {
               val: 3,
               right: null,
               left: null
              }
      },
```

Now, we've already traversed the left, so we would add the value 2 to our results array. Our right is null, which would then end our recursive calls. At the end of this, our results array would return the values:

```javascript
[1, 3, 2]
```

Hope you enjoyed my solution to inorder traversal!
