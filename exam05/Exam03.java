package step01.exam05;

public class Exam03 {

	public static void main(String[] args) {
		
		try {
			work1();
		}catch(Exception e) {
			e.printStackTrace();
			//System.out.println(e);
		}
		System.out.println("main end");
	}
	//내부적으로 처리해도 문제가 없는 예외인 경우
	//호출자에게 보고하는 방식보다 자체적으로 처리하는 것이 더 좋다.
	static void work1() throws Exception {
		try {
			//.....
			throw new Exception("익셉션 발생");// 예외 발생 !
		}catch(Exception e) {
			System.out.println(e);    //자체적으로 처리. 호출자는 모른다.
		}
	}

}
