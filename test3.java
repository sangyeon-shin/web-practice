package test;

import java.util.HashMap;

public class test3 {
	public static void main(String[] args) {
		String answer = "";
		String[] survey = {"AN", "CF", "MJ", "RT", "NA"};
		int[] choices = {5, 3, 2, 7, 5};

        HashMap<String, Integer> result = mapInit();

        for(int i=0; i < survey.length; i++){
            String[] arr = survey[i].split("");
            
            if(choices[i] > 4){
                int point = result.get(arr[1]);
                if(choices[i] == 1){
                    point += 3;
                }else if(choices[i] == 2){
                    point += 2;
                }else if(choices[i] == 3){
                    point += 1;
                }
                result.put(arr[1], point);
            }else if(choices[i] < 4){
                int point = result.get(arr[0]);
                if(choices[i] == 7){
                    point += 3;
                }else if(choices[i] == 6){
                    point += 2;
                }else if(choices[i] == 5){
                    point += 1;
                }
                result.put(arr[0], point);
            }
        }

        answer = cal(result);
        
        System.out.println(answer);

        //return answer;
	}
	
	private static HashMap<String, Integer> mapInit(){
        HashMap<String, Integer> result = new HashMap<String, Integer>();
        result.put("R", 0);
        result.put("T", 0);
        result.put("C", 0);
        result.put("F", 0);
        result.put("J", 0);
        result.put("M", 0);
        result.put("A", 0);
        result.put("N", 0);

        return result;
    }

    private static String cal(HashMap<String, Integer> map){
        String answer = "";
        
        if(map.get("R") > map.get("T")){
            answer += "R";    
        }else if(map.get("R") < map.get("T")){
            answer += "T";
        }else{
            answer += "R";
        }

        if(map.get("C") > map.get("F")){
            answer += "C";    
        }else if(map.get("C") < map.get("F")){
            answer += "F";
        }else{
            answer += "C";
        }

        if(map.get("J") > map.get("M")){
            answer += "J";    
        }else if(map.get("J") < map.get("M")){
            answer += "M";
        }else{
            answer += "J";
        }

        if(map.get("A") > map.get("N")){
            answer += "A";    
        }else if(map.get("A") < map.get("N")){
            answer += "N";
        }else{
            answer += "A";
        }

        return answer;
    }
}
