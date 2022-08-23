package test;

import java.util.Scanner;

public class test8 {
	public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();
        for(int i = 0; i < C; i++){
            int N = sc.nextInt();
            int[] arr = new int[N];
            float total = 0;
            for(int j = 0; j < N; j++){
                int temp = sc.nextInt();
                arr[j] = temp;
                total += temp;
            }
            
            float avg = total / N;
            int result = 0;
            for(int j = 0; j < arr.length; j++) {
            	if(arr[j] > avg) {
            		result++;
            	}
            }
            float R = result;
            System.out.printf("%.3f%%\n",(R / N) * 100);
        }
    }
}
