import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        StringBuilder reverse = new StringBuilder();

        for(int i=0;i<A.length();i++){
        reverse.insert(0,A.charAt(i));
        }
        String reversed=reverse.toString();
        if(A.equals(reversed)){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
        sc.close();
        
        
        
        
    }
}



