package thread.ex02;

class Steal extends Thread{
	private String name;
	public Steal(String name) {
		this.name = name;
	}
	public void run() {
		for(int i=0; i<10; i++) {
			System.out.println(name + ":물건을 옮기고 있다.");
			try {
				sleep(100);
			}catch(InterruptedException e) {
				e.printStackTrace();
				System.out.println(e.getMessage());
			}
		}
		System.out.println(name +": 물건을 모두 옮겼다.");
	}
}
class Fence extends Thread{
	private String name;
	public Fence(String name) {
		this.name = name;
	}
	public void run() {
		for(int i=0; i<10; i++) {
			System.out.println(name  + ": 물건을 팔고 있다");
			try {
				sleep(100);
			}catch(InterruptedException e) {
				e.printStackTrace();
				System.out.println(e.getMessage());
			}
		}
		System.out.println(name + ": 물건을 모두 팔았다.");
	}
}


public class RighteoutOUtLawTest {

	public static void main(String[] args) {
		System.out.println("마숙 넌 저 집을 털어라");
		Steal steal = new Steal("마숙");
		Fence fence = new Fence("차돌바위");
		steal.start();
		
		try {
			steal.join();
			System.out.println("차돌바위 넌 물건을 모두 팔아라");
			fence.start();
			fence.join();
		}catch(InterruptedException e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		System.out.println("홍길동이 마숙과 차돌바위와 유유히 떠났다.~~");
	}

}





