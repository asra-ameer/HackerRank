import java.util.ArrayList;

public class Encryption {
    public static void main(String[] args) {
        String h="world hel2o";
        ArrayList <String> checked =new ArrayList<>();

        String word[]= h.split(" ");

        for(String b:word){
            ArrayList <String> corrected =new ArrayList<>();
            String arr[]=b.split("");
            int count=0;
            for(String i : arr){
                if(i.matches("\\d")){
                    int j=Integer.parseInt(i);
                    int l=(count-2)+j;
                    for(int k=count;k<=l;k++) {
                        corrected.add(arr[count - 1]);
                    }
                    continue;

                }
                corrected.add(i);

                count++;

            }
            String l=String.join("",corrected);
            checked.add(l);
        }
        String sen=String.join(" ",checked.reversed());
        System.out.println(sen);
    }
}