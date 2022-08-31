package test;

import java.util.PriorityQueue;

public class test14 {
	public static void main(String[] args) {
		int[][] jobs = {{0, 5}, {1, 2}, {5, 5}};
		
		int answer = 0;
        int ms = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for(int i = 0; i <= 1000; i++){
            for(int j = 0; j < jobs.length; j++){
                if(jobs[j][0] <= ms) {
                	pq.add(jobs[j][1]);
                	jobs[j][0] = 1001;
                }
            }
            if(!pq.isEmpty() && ms >= answer){
                answer = answer + pq.poll();
            }
            
            if(!pq.isEmpty()) {
            	PriorityQueue<Integer> pq2 = new PriorityQueue<>();
            	while(!pq.isEmpty()) {
            		pq2.add(pq.poll() + 1);
            	}
            	pq = pq2;
            }
            ms++;
        }
        
        System.out.println(answer / 3);
	}
}
