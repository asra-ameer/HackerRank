import java.io.*;
import java.util.*;

public class Solution {
    

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        int sum=A.length()+B.length();
        System.out.println(sum);
        int  result=A.compareTo(B);
        if(result<0){
            System.out.println("No");
        }else if(result>0){
            System.out.println("Yes");
        }
        else{
            System.out.println("No");
        }
        
        String first_word=A.toUpperCase().charAt(0)+A.substring(1);
        String Second_word=B.toUpperCase().charAt(0)+B.substring(1);
        System.out.println(first_word+" "+Second_word);
        
    }
}



