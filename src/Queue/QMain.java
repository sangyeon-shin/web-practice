package Queue;

public class QMain {

	public static void main(String[] args) {
		int i;
		queue q = new queue();
		q.put(3);
		System.out.println(q);
		q.put(4);
		System.out.println(q);
		q.put(5);
		System.out.println(q);
		q.put(6);
		System.out.println(q);
		q.put(7);
		System.out.println(q);
		q.put(8);
		System.out.println(q);
		q.put(9);
		System.out.println(q);

		q.get();
		System.out.println(q);
		q.get();
		System.out.println(q);
		q.get();
		System.out.println(q);
		q.get();
		System.out.println(q);
		q.get();
		System.out.println(q);
		q.get();
		System.out.println(q);
		
		q.put(9);
		System.out.println(q);
		q.get();
		System.out.println(q);

		
		
		
		
		
	}

}
