import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        String a=scan.nextLine();
        String b=scan.nextLine();
        BigInteger big1,big2,big3,big4;
        big1=new BigInteger(a);
        big2=new BigInteger(b);
        big3=big1.add (big2);
        System.out.println(big3);
        big4=big1.multiply(big2);
        System.out.println(big4);
        scan.close();
        
    }
}
