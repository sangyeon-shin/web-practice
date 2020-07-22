package step01.exam05;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class Exam10 {

	public static void main(String[] args) {
		Scanner keyScan = new Scanner(System.in);
		try {
			System.out.println("try...블록 실행");
			System.out.print("값? ");
			int value = keyScan.nextInt();
			switch(value) {
			case 1:
				throw new Exception("1111");
			case 2:
				throw new RuntimeException("2222");
			case 3:
				throw new IOException("3333");
			case 4:
				throw new FileNotFoundException("4444");
			}
		}catch(FileNotFoundException e) {
			System.out.println("4444");
		}catch(IOException e) {
			System.out.println("3333");
		}catch(RuntimeException e) {
			System.out.println("2222");
		}catch(Exception e) {
			System.out.println("11111");
		}

	}

}
