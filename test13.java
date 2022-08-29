package test;

public class test13 {
	public static void main(String[] args) {
		int[] scores = new int[3];
		String[] users = new String[3];
		int[] estimates = {10, 1, 10, 1, 1, 4, 3, 10};
		int k = 6;
		int answer = 0;

        answer = func(estimates, k);
	}
	
	private static int func(int[] estimates, int k){
        int result = 0;
        for(int i = 0; i < estimates.length - k; i++){
            int sum = 0;
            for(int j = i; j < k + i; j++){
                sum += estimates[j];
            }
            if(sum > result){
                result = sum;
            }
        }
        return result;
    }
}
