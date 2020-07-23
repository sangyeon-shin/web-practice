package Stack;

import java.util.Arrays;

class Stack {
	int[] arr;
	int top =0;
	Stack(){
		this(3);
	}
	@Override
	public String toString() {
		return "Stack [arr=" + Arrays.toString(arr) + ", top=" + top + "]";
	}
	Stack(int cnt){
		arr = new int[cnt];
	}
	void push(int val) {
		if(isFull())
		{
			int[]temp = new int[arr.length*2];
			for(int i=0;i<arr.length;i++)
				temp[i] = arr[i];
			arr = temp;
		}
		arr[top++] = val;
	}
	 boolean isFull() {
		 return top == arr.length;
	}
	boolean isEmpty() {
		return top == 0;
	}
	int pop() {
		
		if(top <arr.length/2 ) {
			int[] temp = new int[arr.length/2];
			for(int i=0; i<temp.length; i++) {
				temp[i] = arr[i];
			}
			arr = temp;
		}
		
		if(isEmpty()) {
			System.out.println("스택이 비었습니다.");
			return -1;
		}
		int ret;
		ret = arr[--top];
		arr[top] = 0;
		return ret;
	}
	int capacity() {
		return arr.length;
	}
	int datasize() {
		return top;
	}
	int peek() {
		return arr[top-1];
	}
}
public class StackMain {
	public static void main(String[] args) {
		Stack stk = new Stack();
		int ret;
		stk.push(1);
		System.out.println(stk);
		stk.push(2);
		System.out.println(stk);
		stk.push(3);
		System.out.println(stk);
		stk.push(4);
		System.out.println(stk);
		stk.push(5);
		System.out.println(stk);
		System.out.println(stk.datasize());
		stk.pop();
		System.out.println(stk);
		stk.pop();
		System.out.println(stk);
		stk.pop();
		System.out.println(stk);
		stk.pop();
		System.out.println(stk);
		stk.capacity();
		System.out.println(stk.datasize());

	}

}







