package thread.ex03;

//스레드들간에 공유할 클래스 생성

//반복문의 반복 회수를 저장할 목적
class ShareCnt{
	 private int cnt = 0;
	public void increment() {
		synchronized(this) {
		cnt++;
		}
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
class CNT{
	static private int cnt = 0;
	public void increment() {
		cnt++;
	}
	public int getCnt() {
		return cnt;
	}
}
public class ThreadSyncError {

	public static void main(String[] args) {
		/*
		int result=0;
		CNT a = new CNT();
		CNT b = new CNT();
		CNT c = new CNT();
	
		for(int i=0; i<1000000;i++)
				a.increment();

		for(int i=0; i<1000000;i++)
		     	b.increment();
		for(int i=0; i<1000000;i++)
			    c.increment();
		result = a.getCnt();
		System.out.println("result: " + result);
		*/
		
		ShareCnt shareCnt = new ShareCnt();
		ThreadLoop t1 = new ThreadLoop(shareCnt);
		ThreadLoop t2 = new ThreadLoop(shareCnt);
		ThreadLoop t3 = new ThreadLoop(shareCnt);
		t1.start();
		t2.start();
		t3.start();
		try {
			t1.join();
			t2.join();
			t3.join();
			System.out.println(shareCnt.getCnt());
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
		
	}
}






