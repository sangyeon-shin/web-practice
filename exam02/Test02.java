package step01.exam02;

public class Test02 {

	public static void main(String[] args) {
		//학생의 성적 데이터를 표현하는 클래스 "Score"
		// => 학생 성적을 Score라는 클래스 문법으로 추상화(데이터화)시켰다.
		
		Score s = new Score();
		s.name = "홍길동";
		s.kor = 100;
		s.math = 90;
		s.eng = 100;
		
		//합계와 평균을 구하기 위해 직접 계산하기 보다는 제공되는 메서드를 호출 한다.
		s.compute();
		System.out.printf("합계: %d, 평균: %.2f\n", s.getSum(),s.getAver());
		
		//만약 사용자(개발자)가 임의로 sum이라든가 aver 변수에 접근하려 한다면,
		//컴파일 오류 발생!
		//s.sum = 100;
		
		//이렇게 sum과 aver 변수에 대해 임의로 접근하는 것을 막음으로써
		//sum과 aver 값의 신뢰성은 보장 받는다.
		//따라서 Score 클래스를 정의한 목적(추상화)대로 사용할 수 있다.
	}
}
/*
 * "겟터 메서드(getter)"
 * => getSum(), getAver()와 같이 인스턴스 변수의 값을 꺼내주는 메서드를 말한다.
 * 
 */

















