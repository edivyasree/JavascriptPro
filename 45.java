// 45)
// Determine whether a BST is skewed from its preorder traversal

// Given an array representing the preorder traversal of a BST, determine whether it represents a skewed BST.

// Input:  Preorder traversal of BST: [15, 30, 25, 18, 20]
 
// Output: BST is skewed
 
// Explanation: The Preorder traversal [15, 30, 25, 18, 20] represents the following skewed BST:

//  // Function to determine whether the given preorder traversal of a
//     // binary tree represents a skewed BST
n=[15, 30, 25, 18, 20]
    public static boolean isSkewedBST(int[] pre)
    {
        // get the size of the preorder sequence
        int n = pre.length;
 
        // base case: if BST has two or fewer nodes
        if (n <= 2) {
            return true;
        }
 
        // initialize `min_so_far` and `max_so_far` with the last two elements
        // in the preorder sequence
        int min_so_far = Integer.min(pre[n-1], pre[n-2]);
        int max_so_far = Integer.max(pre[n-1], pre[n-2]);
 
        // start from the third element from the end of the preorder sequence
        for (int i = n - 3; i >= 0; i--)
        {
            // check if the current element is in a valid range and update
            // `min_so_far` & `max_so_far` for the next iteration of the loop
            if (pre[i] < min_so_far) {
                min_so_far = pre[i];
            }
            else if (pre[i] > max_so_far) {
                max_so_far = pre[i];
            }
            else {
                return false;
            }
        }
 
        return true;
    }