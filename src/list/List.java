package list;

public class List {
	Node head;
	Node tail;
	
	List(){
		head = null;
		tail = null;
	}
	public void add(int value) {
		
		Node temp = new Node();
		temp.value = value;
		temp.next = head;
		head = temp;
	}
	public void delete(int value) {
		Node pre=null, temp;
		temp = head;
		while((temp != null) &&(temp.value != value)) {
			pre = temp;
			temp = temp.next;
		}
		if(temp == null) {
			System.out.println("없음 ");
			return;
		}
		pre.next = temp.next;
	}
	public void addtail(int value)
	{
		Node temp = new Node();
		temp.value = value;
		temp.next = null;
		if(head == null) {
			head = temp;
			tail = temp;
			return;
		}
		tail.next = temp;
		tail = temp;

		
	}
	/*
	public void addtail(int value) {
		
		Node temp = new Node();
		temp.value = value;
		temp.next = null;
		Node pre=null, last;
		last = head;
		while(last != null) {
			pre = last;
			last = last.next;
		}
		if(pre == null) {
			head = temp;
			return;
		}
		pre.next = temp;
	}
	*/
}












