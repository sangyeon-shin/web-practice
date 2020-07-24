package thread.ex02;

/*
 * java에서 스레드를 담당하는 클래스를 만드는 2가지 방법
 * 1)Thread 클래스를 상속하다.
 * 2)Runnable 인터페이스를 상속하고 
 *   객체를 Thread의 인자로 넘겨준다.
 *   
 *   2가지 방법을 제공하는 이유
 *   java는 크래스를 단일 상속이기 때문에
 *   이미 다른 클래스를 상속받은 클래스에
 *   스레드를 제공하려면 
 *   Thread를 상속받을 수 없고
 *   대신 Runnable을 상속시켜서 사용하게 한다.
 */



class St implements Runnable{
	private String name;
	public St(String name) {
		this.name = name;
	}
	public void run() {
		for(int i = 0; i< 10; i++) {
			System.out.println(name);
		}
	}
}
class Fe implements Runnable{
	private String name;
	public Fe(String name) {
		this.name = name;
	}
	public void run() {
		for(int i = 0; i< 10; i++) {
			System.out.println(name);
		}
	}
}

class A{
	
}
class Ste extends  A implements Runnable{
	private String name;
	public Ste(String name) {
		this.name = name;
	}
	public void run() {
		for(int i = 0; i< 10; i++) {
			System.out.println(name);
		}
	}
}

public class Runn {

	public static void main(String[] args) {
		St steal = new St("steal");
		Fe fence = new Fe("fence");
		Ste ste = new Ste("Ste");
		Thread thMaSook = new Thread(steal);
		Thread thChaDol = new Thread(fence);
		Thread thSte = new Thread(ste);
		
		thMaSook.start();
		try {
			thMaSook.join();
			System.out.println("steal end");
			thChaDol.start();
			thChaDol.join();
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}

}



