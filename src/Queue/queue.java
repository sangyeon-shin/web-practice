package Queue;

import java.util.Arrays;

/*
public class queue {
	int [] arr;
	int front = 0;
	int rear = 0;
	@Override
	public String toString() {
		return "queue [arr=" + Arrays.toString(arr) + ", front=" + front + ", rear=" + rear + "]";
	}
	public queue(){
		this(5);
	}
	public queue(int i) {
		arr = new int[i];
	}
	public void put(int val) {
		if(isFull())
		{
			System.out.println("큐가 꽉찼습니다.");
			return;
		}
		arr[rear++] = val;
	}
	public boolean isFull() {
		return arr.length==rear; 
	}
	public int get() {
		if(front == rear)
		{
			System.out.println("큐가 비었습니다.");
			return -1;
		}
		return arr[front++];
	}
}
*/
public class queue {
	int [] arr;
	int front = 0;
	int rear = 0;
	@Override
	public String toString() {
		return "queue [arr=" + Arrays.toString(arr) + ", front=" + front + ", rear=" + rear + "]";
	}
	public queue(){
		this(5);
	}
	public queue(int i) {
		arr = new int[i];
	}
	public void put(int val) {
		if(isFull())
		{
			System.out.println("큐가 꽉찼습니다.");
			return;
		}
		arr[rear] = val;
		rear = (rear+1) % arr.length;
	}
	public boolean isFull() {
		//return arr.length==rear;
		return ((rear + 1) % arr.length) ==front;
	}
	public boolean isEmpty() {
		return front==rear;
	}
	public int get() {
		int data;
		if(isEmpty())
		{
			System.out.println("큐가 비었습니다.");
			return -1;
		}
		data = arr[front];
		arr[front] = 0;
		front = (front+1)% arr.length;
		return data;
	}
}




