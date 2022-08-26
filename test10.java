package test;

import java.util.HashMap;

public class test10 {
	public static void main(String[] args){
		String[] participant = {"mislav", "stanko", "mislav", "ana"};
		String[] completion = {"stanko", "ana", "mislav"};
		
		String answer = "";
		HashMap<Integer, Integer> removeMap = new HashMap<Integer, Integer>();
        HashMap<Integer, String> partMap = new HashMap<Integer, String>();
        for(int i = 0; i < participant.length; i++){
            partMap.put(i, participant[i]);
        }
        
        for(int i = 0; i < completion.length; i++){
            String name = completion[i];
            for(Integer key : partMap.keySet()){
                String tmp = partMap.get(key);
                if(name == tmp){
                    removeMap.put(key, key);
                }
            }
        }
        
        for(Integer key : removeMap.keySet()){
            partMap.remove(key);
        }
        
        for(Integer key : partMap.keySet()){
            answer += partMap.get(key);
        }
        System.out.println(answer);
    }
}
