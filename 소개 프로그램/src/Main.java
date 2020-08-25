import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		Main: while (true) {

			System.out.print("(I)ntro ");
			System.out.print("(C)ourses ");
			System.out.println("(E)xit ");

			String cmd = sc.next().toUpperCase();
			switch (cmd) {
			
			case "I": {
				System.out.println("안녕하세요! 우리는 코드잇입니다.");
				System.out.println("함께 공부합시다.");
				break;
			}
			case "C": {
				Intro: while(true) {
				System.out.println("코드잇 수업을 소개합니다.");
				System.out.print("(P)ython ");
				System.out.print("(J)ava ");
				System.out.print("(i)OS ");
				System.out.println("(B)ack ");

				String cmd1 = sc.next().toUpperCase();

				switch (cmd1) {
				case "P": {
					System.out.println("Python 언어를 통해 컴퓨터 사이언스 기초를 배웁니다.");
					System.out.println("강사: 강영훈");
					System.out.println("추천 선수과목: 없음");
					continue Intro;
				}
				case "J": {
					System.out.println("Java의 기본 문법과 객체지향적 프로그래밍을 배웁니다.");
					System.out.println("강사: 김신의");
					System.out.println("추천 선수과목: Python");
					continue Intro;
				}
				case "I": {
					System.out.println("최신 Swift 언어를 통해 iOS 개발을 시작할 수 있습니다.");
					System.out.println("강사: 성태호");
					System.out.println("추천 선수과목: Python, Java");
					continue Intro;
				}
				case "B": {
					continue Main;
				}

				}
				
			}
			}
			case "E": {
				System.out.println("안녕히 가세요.");
				break Main;
			}
			
			}

		}

	}

}
