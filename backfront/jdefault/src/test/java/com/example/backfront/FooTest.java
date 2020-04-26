package com.example.backfront;

import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

public class FooTest {

    @Test
    public void search(){

        int[] nums = {-1, 2, 5, 8, 8, 9, 12};
        // linear : for()
        // bsearch : Arrays/binarySearch()
        // arrays.asList().contains()
        // IntStream.of(arr).anyMatch(x -> x == toCheckValue);

        // max : Arrays.stream().max() ou loop arr[0], arr[i] > max , max = arr[i]
        // sum+= arr[i]
    }

    @Test
    public void bsearchraw() {
        // binary k in arr
        int[] nums = {1,2,3,4,3,4,5,6};

    }

    @Test
    public void firstdupe() {
        // dupe k in arr
        int[] nums = {1,2,3,4,3,4,5,6};
        // linear
        Set<Integer> s = new HashSet<>();
        for (int i : nums) {
            if(s.contains(i)) {
                System.out.println(" dupe = " + i); // return
            } else {
                s.add(i);
            }
        }
        // return -1
        // negative marker
        // hare
    }

    @Test
    public void firstnondupe() {

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
        // ratio nb points dans cercle/nb points dans carré ~= area circle / area square
        // racine de (x pow 2 + y pow 2) : si < 1 = in area
        // pi = 4 x le nb de points dans area divise par nb de points total
    }

}
