package step01.exam05;

public class Exam04 {

	public static void main(String[] args) {
		try {
			work2();  // 보고 받은 쪽에서 처리한다.
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	//내부적으로 처리해서는 안되는 경우
	//반드시 호출자에게 오류 상황을 보고 하는 것이 좋다.
	static void work2() throws Exception{
		work3();
	}
	static void work3() throws Exception{
		throw new Exception("익셉션 발생 "); //예외 발생 !
	}
}
