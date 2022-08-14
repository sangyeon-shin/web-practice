package test;

public class test2 {
	public static void main(String[] args) {
		String[] req = {"abcde", "abctkddus", "abde"};
		String result = "";
		
		for(int i = 0; i < req.length - 1; i++) {
			String temp = "";
			temp = findSameStr(req[i], req[i+1]);
			
			if(result == "") {
				result = temp;
			}else {
				result = findSameStr(result,temp);
			}
		}
		
		System.out.println(result);
		
	}
	
	private static String findSameStr(String str1, String str2) {
		String result = "";
		
		String[] arr1 = str1.split("");
		String[] arr2 = str2.split("");
		
		int length = arr1.length > arr2.length ? arr2.length : arr1.length;
		
		for(int j = 0; j < length; j++) {
			if(arr1[j].equals(arr2[j])) {
				result += arr1[j];
			}
		}
		
		return result;
	}
}
