package step01.exam05;

import java.util.Scanner;

public class Exam01 {

	public static void main(String[] args) {
		Scanner keyScan = new Scanner(System.in);
		int a, b;
		while(true) {
			System.out.print("a / b ? ");
			a = keyScan.nextInt();
			b = keyScan.nextInt();
			System.out.printf("결과는 %d입니다.", a /b);
			//0으로 나누게 되면 예외가 발생한다.
			//=>예외가 발생하면 실행을 멈추고 이 메소드를 호출한 쪽에 즉시 보고한다.
			//=>main()를 호출한 것은 JVM이다.
			//=>JVM은 예외를 보고 받으면 즉시 실행을 멈춘다.
			//바로 이것이 문제 !
		}
	}
}

/*예외 처리
 * => 실행 중 오류가 발생하더라도 시스템을 멈추지 않고 계속 실행시킬 수 있게 만드는 문법
 * 
 * 예외 종류
 * 1)시스템 오류
 * =>java.lang.Error 클래스 계열의 예외이다.
 * =>JVM이 발생시킨다.
 * =>개발자가 제어할 수 없다.
 * =>이런 오류가 발생하면 적절히 처리한 후에 시스템을 종료해야 한다.
 * => 예) 메모리가 부족하다는 오류 발생!
 *       사용자에게 안내 메시지를 출력한 후 시스템을 종료한다.
 * => 예외 처리를 필수로 요구하지 않는다.
 *    즉 개발자가 예외를 처리하기 위해 try ~ catch ~ 를 반드시 사용할 필요는 없다.
 *    
 * 2)애플리케이션 예외
 *  =>java.lang.Exception 클래스 계열의 예외이다.
 *  =>애플리케이션에서 발생시킨다.
 *  =>개발자가 제어할 수 있다.
 *  =>이런 예외가 발생하면, 적절히 처리한 후에 계속 시스템을 실행 시킬 수 있다.
 *  => 예) 숫자가 아닌 문자가 입력되었다.
 *         사용자에게 다시 입력하라고 안내 메시지를 출력한 후 실행을 계속한다.
 *  => 예외 처리 코드를 반드시 작성해야 한다.
 *     즉 try ~ catch 코드를 작성해야 한다.
 * 
 * 예외 클래스 상속 관계
 * java.lang.Throwable
 *    => java.lang.error
 *    => java.lang.Exception
 * 
 * 런타임 예외(java.lang.RuntimeException)
 *  => java.lang.Exception 계열의 예외(애플리케이션 예외)임에도 불구하고
 *     예외 처리 코드를 반드시 작성할 필요는 없다.
 *  => 실행 시에 발생되는 가벼운 예외로서,
 *     중앙에서 처리할 목적으로 보통 사용된다.
 *
 */




















