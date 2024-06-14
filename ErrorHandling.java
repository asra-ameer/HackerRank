import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        
       
       try {
        Scanner readinput=new Scanner (System.in);
        int x=readinput.nextInt();
        int y=readinput.nextInt();
        //if(y==0)throw new ArithmeticException("cannot Divide By 0");
        
        int sum =(x/y);
        System.out.println(sum);
       }
        
         catch (InputMismatchException e) {
            System.out.println(e.getClass().getName());
        } catch (ArithmeticException e) {
            System.out.println(e.getClass().getName() + ": / by zero");
        }
       
       
    }
    
}
