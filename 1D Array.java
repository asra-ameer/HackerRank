import java.util.*;

public class Solution {

    public static void main(String[] args) {
	   
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int []a=new int [n];
        int z=0;
        int j=10;
        while(z<a.length && j<=50){
            a[z]=j;
            z++;
            j+=10;
        }
        
        
        scan.close();

        // Prints each sequential element in array a
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
