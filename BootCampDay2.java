import java.util.Scanner;
public class BootCampDay2 {
    public static void main(String args[]) {
        System.out.println("Enter an Integer : ");
        Scanner t= new Scanner(System.in);
        t.close();
        int M=t.nextInt();
        if(M%3==0&&M%5==0) {
            System.out.println("Good Number");
        }
        else if(M%3==0) {
            System.out.println("Bad Number");
        }
        else if(M%5==0) {
            System.out.println("Poor Number");  
        }
        else 
        {
            System.out.println("-1");
        }
    }
}
