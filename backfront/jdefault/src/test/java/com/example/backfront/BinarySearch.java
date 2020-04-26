package com.example.backfront;

public class BinarySearch {

    public static int binarySearch(int arr[], int left, int right, int x)
    {
        if (right>=left)
        {
            int mid = left + (right - left)/2;
            System.out.println("idx mid = " + mid + "(left:"+left+"),(right:"+right+")");
            // If the element is present at the
            // middle itself
            if (arr[mid] == x)
                return mid;

            // If element is smaller than mid, then it can only be present in left subarray
            if (arr[mid] > x) {
                System.out.println("arr[mid] > x, x = " + x + " smaller than arrmid =" + arr[mid] + "->r=mid-1="+(mid-1)+", left unchanged");
                // left las touche
                return binarySearch(arr, left, mid-1, x);
            }

            // Else the element can only be present in right subarray
            // left +1mid, right pas touche (on était deja sous right)
            System.out.println("x = " + x + " NOT smaller than arrmid =" + arr[mid] + "->l=mid+1="+(mid+1)+", r unchanged");
            return binarySearch(arr, mid+1, right, x);
        }

        // not present in array
        return -1;
    }

    public static void main(String args[])
    {
        BinarySearch ob = new BinarySearch();
        int arr[] = {2,3,4,10,40,100,1,5,20,10,8};
        int n = arr.length;
        int x = 10;
        int result = ob.binarySearch(arr,0,n-1,x);
        if (result == -1)
            System.out.println("Element not present");
        else
            System.out.println("Element found at index " +
                    result);
    }
}
