---
path: algorithms/binary-tree/pre-order-traversal
date: 2020-02-23T21:48:37.221Z
title: Binary Tree Pre-Order Traversal
description: Looking over how to implement pre order traversal using JavaScript
---
Part of my New Year's resolution is to get better with data structures and algorithms. I never had an in depth course on the topic and have made it a mission to become much better at the topic by the end of the year.

Once of the main sources I'm using to learn is LeetCode. Not only do they have hundreds of problems to work on, but they actually have a pretty good training path to follow to continually improve(for a fee).

Over the next few months my goal is to make a minimum of 3 blog posts a week, each covering a new algorithm. Anyways, on to the topic at hand: **Binary Tree Pre Order Traversal**.

Pre Order Traversal means to visit the root of the tree first. Then, you want to traverse the left subtree, followed by the right subtree. Here is a quick diagram showing the order:

![](/assets/preorder-traversal.png)

The problem is as follows: Given a binary tree, return the *preorder* traversal of its nodes' values.

So let me try to show my solution in code:

```javascript
let preorderTraversal = function(root) {
  if (root === null) {
    return []
  }
  let stack = []
  stack.push(root)
  let output = []

  while (stack.length > 0) {
    root = stack.pop()
    if (root) {
      output.push(root.val)
      if (root.right) {
        stack.push(root.right)
      }
      if (root.left) {
        stack.push(root.left)
      }
    }
  }
  return output
}
```

So let's try to dissect what's going on here.  On line #1 we declare a function which takes a root of a tree as a parameter.  First we check if the root is null, and if it is, we return an empty array on lines 2-4.

We create an empty array to keep a list of nodes we are traversing called stack on line 5.  Afterwards, we push the entire tree into the stack variable on line 6.

We then create a variable called output, which we will use to store the value of each node as we traverse the tree.

In the while loop, we will check that we have a node in the stack variable, which means we can still traverse the tree.  In this case, at the beginning, we will have the entire tree available to us as we start.

In line 10, we will pop a node off the stack, and set the root to this node.  If there is a value to pop off the stack, we will store the value of that node in the output variable.

Now, it's time to traverse the tree.  Remember that in preorder traversal, after visiting the root, we want to visit the left node first.  So that's exactly what we do by checking first if we have a right node.  If we do we add that to our stack.  Then, we check if we have a left node, and if so, add that to our stack as well.

So why are we doing it in reverse?  Because now our left node is on top of the stack, so that when we 'pop' it off, we will visit the left node first.  

We keep looping though each node and adding their left and right nodes to the stack while also adding the root values to our output until there are no more nodes in the stack.

At the end, we return our list of outputs.

A fairly simple warmup algorithm.  Tomorrow I will try to solve the Inorder Reversal algorithm.
