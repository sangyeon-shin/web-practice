package thread.ex02;

//스레드들간에 공유할 클래스 생성

//반복문의 반복 회수를 저장할 목적
class ShareCnt{
	private int cnt = 0;
	public void increment() {
		cnt++;
	}
	public int getCnt() {
		return cnt;
	}
}
class ThreadLoop extends Thread{
	private ShareCnt sc;
	public ThreadLoop(ShareCnt sc) {
		this.sc = sc;
	}
	public void run() {
		for(int i=0; i<1000000;i++)
			sc.increment();
	}
}
public class ThreadSyncError {

	public static void main(String[] args) {
		ShareCnt shareCnt = new ShareCnt();
		ThreadLoop t10 = new ThreadLoop(shareCnt);
		t10.start();
		try {
			t10.join();
			System.out.println(shareCnt.getCnt());
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
}






