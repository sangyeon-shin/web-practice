package test;

import java.util.Scanner;

public class test6 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();
        for(int i = 0; i < count; i++){
        	int temp = cal(sc.next());
            System.out.println(temp);
        }
	}
	
	public static int cal(String str){
        String[] arr = str.split("");
        int result = 0;
        int count = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i].equals("O")){
                count++;
            }else if(arr[i].equals("X")){
                for(int j = count; j > 0; j--){
                    result += j;
                }
                count = 0;
            }
            
            if(i == arr.length -1) {
            	for(int j = count; j > 0; j--){
                    result += j;
                }
            }
        }
        
        
        
        return result;
    }
}
