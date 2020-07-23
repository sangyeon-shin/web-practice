package list;

public class listMain {

	public static void main(String[] args) {
		
		List list = new List();
//		list.addtail(4);
//		list.addtail(5);
//		list.addtail(6);
//		list.addtail(7);
//		print(list.head);
		list.add(4);
		list.add(5);
		list.add(6);
		list.add(7);
		print(list.head);
		list.delete(5);
		print(list.head);
		list.delete(6);
		print(list.head);
		list.delete(6);
		print(list.head);
	}
	
	static void print(Node node) {
		Node temp = node;
		while(temp != null) {
			System.out.printf("[%d]->", temp.value);
			temp = temp.next;
		}
		System.out.println();
	}

}
