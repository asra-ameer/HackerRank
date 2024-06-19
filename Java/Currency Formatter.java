import java.util.*;
import java.text.*;

public class Solution {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
       
        NumberFormat localizedCurrencyFormat = NumberFormat.getCurrencyInstance(Locale.US);
        String us = localizedCurrencyFormat.format(payment);
        System.out.println("US: " + us);

        NumberFormat formatter = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        String india = formatter.format(payment);
        System.out.println("India: " + india);

        NumberFormat lp = NumberFormat.getCurrencyInstance(Locale.CHINA);
        System.out.println("China: " + lp.format(payment));
        
        NumberFormat localizedCurren = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        String france  = localizedCurren.format(payment);
        System.out.println("France: " + france);
       
    }
}
