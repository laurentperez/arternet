package com.example.backfront;

import org.junit.jupiter.api.Test;

public class FooTest {

    @Test
    public void array(){

        int[] arr = {-1, 1, 5, 8};
        // linear : for()
        // bsearch : Arrays/binarySearch()
        // arrays.asList().contains()
        // IntStream.of(arr).anyMatch(x -> x == toCheckValue);

        // max : Arrays.stream().max() ou loop arr[0], arr[i] > max , max = arr[i]
        // sum+= arr[i]
    }

    @Test
    public void bsearch() {
        // binary k in arr
        // 
    }

    @Test
    public void btree() {
        // https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/?ref=rp
        // 1 < 2 & 3 -  2 < 4 & 5
        // Pre order : root first 12453
        // In order : first visits the left node, followed by root and finally right node. 42513
        // Post order : left, right finally root 45231
        BinaryTree bt = BinaryTree.create();
        bt.inOrder();
    }

    @Test
    public void piarc() {
    }

}
