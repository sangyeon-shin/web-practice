package test;

import java.util.Arrays;

public class test15 {
	public static void main(String[] args) {
		int[][] jobs = {{0, 5}, {2, 2}, {4, 2}};
		
		int answer = 0;
        int ms = 0;
        //요청부터 종료까지 = 작업 완료시간(현재시간 + 작업의 소요시간) - 요청 시간
        Arrays.sort(jobs, (o1, o2) -> {
           return Integer.compare(o1[1], o2[1]);
        });
        
        for(int i = 0; i < 1000; i++){
            for(int j = 0; j < jobs.length; j++){
                int req = jobs[j][0];
                if(answer <= ms && req <= ms){
                    answer += ms + jobs[j][1] - req;
                    jobs[j][0] = 1001;
                    break;
                }
            }
            ms++;
        }
        
        System.out.println(answer / jobs.length);
	}
}
