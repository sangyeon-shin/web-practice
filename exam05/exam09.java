package step01.exam05;

import java.util.Scanner;

/*
 * finally
 * => try 또는 catch 블록을 나가기 전에 반드시 실행된다.
 * =>그래서 finally 블록에는 정상적으로 실행되든 예외가 발생하든 상관없이
 *   반드시 실행해야 하는 코드를 둔다.
 * => 보통 파일을 닫거나 데이터베이스를 닫는 등의 자원을 해제하는 코드를 둔다.
 */
public class exam09 {
	public static void main(String[] args) {
		Scanner keyScan = new Scanner(System.in);
		try {
			System.out.println("try .... 블록 실행");
			System.out.print("값? ");
			int value = keyScan.nextInt();
			if(value == 1) {
				throw new Exception("예외 발생!");
			}
			return; //메서드 실행을 즉시 종료한다.
		}catch(Exception e) {
			System.out.println("catch...블록 실행");
			return;
		}finally {
			System.out.println("finally... 블록 실행");
		}
	}
}









