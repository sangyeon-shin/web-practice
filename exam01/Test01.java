package step01.exam01;

public class Test01 {

	public static void main(String[] args) {
		Score s = new Score();
		s.name = "홍길동";
		s.kor = 100;
		s.math = 90;
		s.eng = 100;
		
		s.sum =s.kor + s.math + s.eng;
		s.aver = s.sum / 3f;
		
		System.out.printf("합계: %d, 평균: %.2f\n", s.sum,s.aver);
	}

}
