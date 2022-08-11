package test;

import java.util.Arrays;

public class test1 {
	public static void main(String[] args) {
		int N = 1234;
		String str = "";
		
		while(N > 0) {
			str += N % 10 + " ";
			N /= 10;
		}
		
		String[] arr = str.split(" ");
		int[] arr2 = new int[arr.length];
		for(int i = 0; i < arr.length; i++) {
			arr2[i] = Integer.parseInt(arr[i]);
		}
		
		//Arrays.sort(arr);
		arr2 = descSort(arr2);
		
		String asc = "";
		String desc = "";
		
		for(String val : arr) {
			asc += val;
		}
		
		for(int i = arr.length - 1; i >= 0; i--) {
			desc += arr[i];
		}
		
		System.out.println(Integer.parseInt(asc) + Integer.parseInt(desc));
		
	}
	
	public static int[] sort(int[] arr) {
		int temp = 0;
		for(int i = 0; i < arr.length; i++) {
			for(int j = 1; j < arr.length-i; j++) {
				if(arr[j-1] > arr[j]) {
					temp = arr[j-1];
					arr[j-1] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	}
	
	public static int[] descSort(int[] arr) {
		int temp = 0;
		for(int i = 0; i < arr.length; i++) {
			for(int j = 1; j < arr.length-i; j++) {
				if(arr[j-1] < arr[j]) {
					temp = arr[j-1];
					arr[j-1] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	}
}
