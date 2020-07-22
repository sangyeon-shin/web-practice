package step01.exam05;

import java.io.FileOutputStream;

import java.io.FileOutputStream;

/*
 * try-with-resource 
 */
public class Exam14 {

	public static void main(String[] args) {
		
		System.out.println("test");
		try(//이 괄호 안에 선언된 객체는 try~ catch~ 블록을 나가기 전에
			//자동으로 close()를 호출하여 자원 해제를 수행할 것이다.
			//개발자가 직접 finally 블록에 자원 해재 코드를 작성할 필요가 없다는 의미
			// java.lang.AutoClosable 구현체에 대해서만 적용할 수 있다. 
			FileOutputStream out = new FileOutputStream("Exam090_13.dat");
			){
			out.write(100);
		}catch(Exception e) {
			System.out.println("test");
		}
System.out.println("test");
	}

}
