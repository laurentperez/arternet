package com.example.backfront;

/*
 * using inorder traversal without recursion.
 * In InOrder traversal first left node is visited, followed by root
 * and right node.
 *
 * input:
 *      40
 *     /  \
 *    20   50
 *   / \    \
 *  10  30   60
 * /   /  \
 * 5  67  78
 *
 * output: 5 10 20 67 30 78 40 50 60
 */
public class BinaryTree {

    static class TreeNode {
        String data;
        TreeNode left, right;

        TreeNode(String value) {
            this.data = value;
            left = right = null;
        }

    }

    // root of binary tree
    TreeNode root;

    /**
     * traverse the binary tree on InOrder traversal algorithm
     */
    public void inOrder() {
        inOrder(root);
    }

    private void inOrder(TreeNode node) {
        if (node == null) {
            System.out.printf("null");
            return;
        }
        System.out.printf("Le:");
        inOrder(node.left);
        System.out.printf("D:%s ", node.data);
        System.out.printf("Ri:");
        inOrder(node.right);
    }

    /**
     * Java method to create binary tree with test data
     *
     * @return a sample binary tree for testing
     */
    public static BinaryTree create() {
        BinaryTree tree = new BinaryTree();
        TreeNode root = new TreeNode("40");
        tree.root = root;
        tree.root.left = new TreeNode("20");
        tree.root.left.left = new TreeNode("10");
        tree.root.left.left.left = new TreeNode("5");

        tree.root.left.right = new TreeNode("30");
        tree.root.right = new TreeNode("50");
        tree.root.right.right = new TreeNode("60");
        tree.root.left.right.left = new TreeNode("67");
        tree.root.left.right.right = new TreeNode("78");

        return tree;
    }
}
