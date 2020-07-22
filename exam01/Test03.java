package step01.exam01;

public class Test03 {

	public static void main(String[] args) {
		//병원의 환자를 "Patient"라는 클래스로 추상화(데이터화)시켰다.
		Patient p = new Patient();
		p.name = "임꺽정";
		p.age = 30;
		p.weight = 90;
		p.height = 180;
		p.gender = false;
		
		Patient p2 = new Patient();
		p2.name = "홍길동";
		p2.age = 300;		//환자 나이로 적합하지 않다.
		p2.weight = 70;
		p2.height = -30;	//환자의 키로 적합하지 않다.
		p2.gender = false;
		//p2의 경우처럼 유효하지 않은 값을 넣게 되면,
		//환자 데이터로서 신뢰성을 상실하게 된다.
		//=>Patient를 추상화 시킨 의미가 상실된다.
		//=>해결책?

	}
}






