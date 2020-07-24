package thread.ex02;
/*
 * 공유객체를 생성한다.
 * 스레드 2개를 생성하고 스레드에서는 공유 객체를 공유한다.
 * 1개 스레드는 for문으로 1 ~ 1000000 1씩 공유객체의 변수를 증가시킨다.
 * 1개 스레드는 for문으로 1 ~ 1000000 1씩 공유객체의 변수를 감소 시킨다.
 * main에서 공유객체의 최종결과는 0 이 나와야 한다.
 */
class ShareSum1{
	private int sum = 0;
	
	public int getSum() {
		return sum;
	}
	public synchronized void inc() {
		sum++;
	}
	public synchronized void dec() {
			sum--;
		}
}

class Threadinc extends Thread{
	private ShareSum1 sSum;
	boolean sel;

	public Threadinc(ShareSum1 sSum,boolean sel) {
		this.sSum = sSum;
		this.sel = sel;
	}
	public void run() {
		for(int i=0;i<1000000;i++) {
			if(sel)
				sSum.inc();
			else
				sSum.dec();
		}
	}
}
/*
class Threaddec extends Thread{
	private ShareSum1 sSum;

	public Threaddec(ShareSum1 sSum) {
		this.sSum = sSum;
	}
	public void run() {
		for(int i=0;i<1000000;i++) {
			sSum.dec();
		}
	}
}
*/
public class ResultZero {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ShareSum1 sSum = new ShareSum1();
		Threadinc a = new Threadinc(sSum,true);
		Threadinc b = new Threadinc(sSum,false);
		
		a.start();
		b.start();
		try {
			a.join();
			b.join();
			System.out.println(sSum.getSum());
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

}
