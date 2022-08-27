package test;

public class test11 {
	public static void main(String[] args){
		int[] array = {1, 5, 2, 6, 3, 7, 4};
		int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
		int[] answer = {};
        answer = new int[commands.length];
        
        for(int i = 0; i < commands.length; i++){
            int[] command = commands[i];
            int[] arr = cutArray(array, command);
            arr = sortArray(arr);
            answer[i] = getValue(arr, command);
        }
        
        
        System.out.println(answer);
	}
	
	private static int[] cutArray(int[] array, int[] command){
        int start = command[0];
        int end = command[1];
        
        int arrSize = end - start + 1;
        int[] newArr = new int[arrSize];
        int cnt = 0;
        for(int i = start - 1; i < end - 1; i++){
            newArr[cnt] = array[i];
            cnt++;
        }
        
        return newArr;
    }
    
    private static int[] sortArray(int[] array){
        for(int i = 0; i < array.length; i++){
            for(int j = 1; j < array.length - i; j++){
                if(array[j-1] > array[j]){
                    int temp = array[j-1];
                    array[j-1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }
    
    private static int getValue(int[] array, int[] command){
        int position = command[2];
        return array[position-1];
    }
}
