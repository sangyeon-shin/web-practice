package test;

public class test16 {
	public static void main(String[] args) {
		int maxNumber = 9999;
		int count = 0;
		int sum = 0;
		
		for(int i = 1; i <= maxNumber; i++) {
			if(checkHappyNumber(i)) {
				count++;
				sum += i;
			}
		}
		System.out.println("count : " + count);
		System.out.println("sum : " + sum);
		
		//System.out.println(checkHappyNumber(55));
	}
	
	public static boolean checkHappyNumber(int number) {
		boolean result = false;
		int operatingCnt = 0;
		while(number != 1) {
			int total = 0;
			while(number >= 10) {
				int one = number % 10;
				total = total + one * one;
				number = number / 10;
				if(number < 10) {
					total = total + number * number;
					number = total;
					break;
				}
			}
			if(number < 10) {
				number = number * number;
			}
			++operatingCnt;
			if(operatingCnt > 50) {
				break;
			}
		}
		
		if(number == 1)
			result = true;
		
		return result;
	}
}
