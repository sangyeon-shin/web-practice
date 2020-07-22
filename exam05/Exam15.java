package step01.exam05;

import java.io.FileNotFoundException;
import java.io.IOException;

/*
 * throw new Exception("aaa")
 * throw [Throwable 객체]
 * Throwable ==> java.lang.Throwable
 * 
 */
public class Exam15 {

	public static void main(String[] args) {
		try {
			m4(2);
		}catch(Throwable e) {
			System.out.println(e);
		}
	}
	
	//메서드에 어떤 오류를 던지는 지 반드시 선언해야 한다.
	//=> [리턴타입] 메서드명(파라미터...)  throws 예외타입, 예외타입, ...{...}
	static void m() throws Throwable{
		//throw new String("오류");
		throw new Throwable("오류");
	}
	static void m2() throws Exception{
		throw new Exception("하위 클래스 ");
	}
	
	static void m3(int i) throws Exception, IOException, FileNotFoundException{
		if(i == 0)
			throw new Exception();
		else if(i ==2)
			throw new IOException();
		else if(i ==3)
			throw new FileNotFoundException();
	}
	
	static void m4(int i) throws Exception{
		if(i == 0)
			throw new Exception();
		else if(i ==2)
			throw new IOException();
		else if(i ==3)
			throw new FileNotFoundException();
	}

}



