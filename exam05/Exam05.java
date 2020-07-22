package step01.exam05;

public class Exam05 {

	public static void main(String[] args) {
		try {
			work3();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	//내부적으로 처리해서는 안되는 경우
	//그런데 보고하기 전에 임시 처리해야 하는 경우,
	//그런 경우 try ~ catch ~ 를 사용하여 내부적으로 처리한 후
	//호출자에게 보고하는 방식을 취한다.
	static void work3() throws Exception{
		try {
			throw new Exception("익셉션 발생");
		}catch (Exception e) {
			System.out.println("익셉션 중간 처리 ");
			throw e;
		}
	}

}
