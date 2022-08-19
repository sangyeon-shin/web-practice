package test;

public class test7 {
	public static void main(String[] args) {
		int[] v = {4, 5, 5};
		int a = 2;
		int b = 1;
		int answer = 0;
		boolean driveState = true;
		Loop1 :
		while(driveState) {
			v = descSort(v);
			
			v = drivePerHour(v, a, b);
			
			for(int i = 0; i < v.length; i++) {
				if(v[i] == 0) {
					driveState = false;
					break Loop1;
				}
			}
			answer++;
		}
	}
	
	public static int[] descSort(int[] arr) {
		int temp = 0;
		for(int i = 0; i < arr.length; i++) {
			for(int j = arr.length- 1 - i; j >= 1; j--) {
				if(arr[j] > arr[j-1]) {
					temp = arr[j];
					arr[j] = arr[j-1];
					arr[j-1] = temp;
				}
			}
		}
		return arr;
	}
	
	public static int[] drivePerHour(int[] arr, int a, int b) {
		if(arr[0] < a) {
			arr[0] = 0;
		}else {
			arr[0] -= a;
		}
		
		for(int i = 1; i < arr.length; i++) {
			if(arr[i] < b) {
				arr[i] = 0;
			}else {
				arr[i] -= b;
			}
		}
		
		return arr;
	}
}
