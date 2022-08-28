package test;

import java.util.LinkedList;
import java.util.Queue;

public class test12 {
	public static void main(String[] args){
		int[] progresses = {95, 95, 95, 95};
		int[] speeds = {4, 3, 2, 1};
		
		int[] answer = {};
		String tmp = "";
        int completeCnt = 0;
        int workCnt = 0;
        Queue<Integer> queue = init(progresses);
        while(!queue.isEmpty()){
            while(queue.peek() != null && queue.peek() >= 100){
                queue.poll();
                ++workCnt;
                ++completeCnt;
            }
            
            if(workCnt > 0){
                tmp += workCnt;
                workCnt = 0;
            }
            queue = work(queue,speeds,completeCnt);
        }
        
        String[] arr = tmp.split("");
        answer = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            answer[i] = Integer.parseInt(arr[i]);
        }
        
        System.out.println(answer);
	}
	
	private static Queue<Integer> init(int[] progresses){
        Queue<Integer> queue = new LinkedList<Integer>();
        for(int progress : progresses){
            queue.offer(progress);
        }
        return queue;
    }
    
    private static Queue<Integer> work(Queue<Integer> queue, int[] speeds,int cnt){
    	Queue<Integer> newQueue = new LinkedList<Integer>();
        for(int i = cnt; i < speeds.length; i++){
            int value = queue.poll() + speeds[i];
            newQueue.offer(value);
        }
        return newQueue;
    }
}
