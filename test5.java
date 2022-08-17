package test;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class test5 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        
        List<Integer> list = new ArrayList<Integer>();
        
        int count = sc.nextInt();
        int max = 0;
        for(int i = 0; i < count; i++){
            int value = sc.nextInt();
            list.add(value);
            if(value > max){
                max = value;
            }
        }
        float avg = 0;
        for(int i = 0; i < list.size(); i++){
            float temp = list.get(i);
            temp = temp / max * 100;
            avg += temp;
        }
        System.out.println(avg/count);
	}
}
