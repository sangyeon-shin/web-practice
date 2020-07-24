package thread.ex02;

/*
 * 스레드에는 스케줄링(Jvm이 스레드에 cpu할당하는 것)의 빈도수를 
 * 제어하기 위해 Priority를 가지고 있다.
 * 기본적으로 Normal 우선순위를 가지고 있다.
 */
class ThreadP extends Thread{
	private String msg;
	public ThreadP(String msg) {
		this.msg = msg;
	}
	public void run() {
		for(int i=0; i< 100000; i++)
			System.out.println(msg + "(" + getPriority() + ")");
	}
}
public class PriorityTest {

	public static void main(String[] args) {
		ThreadP tp0 = new ThreadP("First");
		ThreadP tp1 = new ThreadP("Second");
		ThreadP tp2 = new ThreadP("Third");
		
		tp0.start();
		tp1.start();
		tp2.start();
	}

}



