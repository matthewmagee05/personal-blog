---
path: /
date: 2020-02-26T01:13:46.230Z
title: Binary Tree Post-Order Traversal
description: Looking over how to implement post-order traversal using JavaScript
---
Today's blog post will be a quick one as it's very similar to the first post I did on Pre-Order Traversal.  Today we are going to talk about Post-Order traversal of a binary tree.

Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.  Lets take a look at what that means:

![](assets/Tree-Traversals-Postorder.png)

And todays problem we are trying to solve: Given a binary tree, return the *postorder* traversal of its nodes' values.  So let's look at the code:

```javascript
let postorderTraversal = function(root) {
    if(root === null){
        return [];
    }
    
    let stack = [].concat(root);
    
    let output = [];
    
    while(stack.length > 0){
        root = stack.pop();
        output.unshift(root.val);
        
        if(root.left !== null){
            stack.push(root.left)
        }
        
        if(root.right !== null){
            stack.push(root.right)
        }
    }
    
    return output;
};
```

So let's walk through what this code is doing.   Similar to previous posts, we have a function which takes as a parameter the root of a tree.  First, we check if that tree is null, and if it is return an empty array.

Then, on line 6, we create a stack variable and push our root onto the stack.

On line 8 we create an output variable which will hold the values of our tree.

Next, on line 10, we start our loop which will handle traversing though the tree.  So we first pop the element off of our stack and store that in the root variable.  We then prepend (unshift in javascript) the root value to our output array.

Why are we prepending?  Because if we were to append the values to the end, we would be doing a Pre-order traversal.  But by putting the values at the beginning of the array as we go deeper down the subtrees, we are in fact adding the values in the correct post-order traversal way we set out to do for this exercise.

Next, we check if each subtree has a left or a right, and push it on the stack accordingly.  We continue looping until there are no more subtrees on the stack, and then return our output.  In this case our output would display:

```javascript
[3,2,1]
```

And there we have it!  Pretty easy today.  If it seemed a little fast, feel free to view my post on Post-Order Traversal for more information, as the algorithms are very similar.
