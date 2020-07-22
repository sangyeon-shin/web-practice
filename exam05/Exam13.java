package step01.exam05;

import java.io.FileOutputStream;

public class Exam13 {

	public static void main(String[] args) {
		
		FileOutputStream out = null;
		
		try {
			out = new FileOutputStream("Exam090_13.dat");
			out.write(100);
		}catch(Exception e) {
			
		}finally { //자원해제는 finally에서 수행한다.
			//중요한 것은 개발자가 직접 코딩해야 한다.
			try {
				if(out != null)
				    out.close();
				}catch(Exception e) {}
		}

	}

}
