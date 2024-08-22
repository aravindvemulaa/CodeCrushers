import java.util.*;
class BootCampDay3 {
    public static void main(String args[]) {
    int r,m=0,temp;
     int n;
    System.out.println("Enter a Number: ");
        Scanner t=new Scanner(System.in);
        t.close();
        n=t.nextInt();
        temp=n;
    while (n > 0) {
            r=n%10;
            m=(m*10)+r;
            n=n/10;
        }
    if (temp==m) {
       System.out.println("Palindrome Number");
        } 
    else {
       System.out.println("Not a Palindrome Number");
      }
   }
}
