package test;

public class test4 {
	public static void main(String[] args) {
		int[] queue1 = {1, 2, 1, 2};
		int[] queue2 = {1, 10, 1, 2};
		int answer = -1;
		int goal = searchGoalValue(queue1, queue2);

		int chk1 = check1(queue1, queue2, goal) > 0 ? check1(queue1, queue2, goal) : 1000;
        
        int chk2 = check2(queue1, queue2, goal) > 0 ? check2(queue1, queue2, goal) : 1000;
        
        int chk3 = check3(queue1, queue2, goal) > 0 ? check3(queue1, queue2, goal) : 1000;
        
        if(chk1 < chk2 && chk1 < chk3){
            answer = chk1;
        }else if(chk1 > chk2 && chk2 < chk3){
            answer = chk2;
        }else if(chk3 < chk2 && chk1 > chk3){
            answer = chk3;
        }
	}
	
	private static int searchGoalValue(int[] queue1, int[] queue2){
        int total = 0;

        for(int val : queue1){
            total += val;
        }

        for(int val : queue2){
            total += val;
        }

        return total / 2;
    }

    private static boolean confirmValue(int[] queue1, int[] queue2){
        boolean result = false;
        int q1val = 0;
        int q2val = 0;

        for(int val : queue1){
            q1val += val;
        }

        for(int val : queue2){
            q2val += val;
        }

        if(q1val == q2val){
            result = true;
        }

        return result;
    }

    private static int check1(int[] queue1, int[] queue2, int goal){
        int count = 0;
        for(int i=1; i <= queue1.length; i++){
            if(queue1[i-1] == goal){
                int length = queue2.length;
                length += i;
                count = 1 - length;
                if(count < 0){
                    count *= -1;
                }
                break;
            }
        }

        for(int i=1; i <= queue2.length; i++){
            if(queue2[i-1] == goal){
                int length = queue1.length;
                length += i;
                count = 1 - length;
                if(count < 0){
                    count *= -1;
                }
                break;
            }
        }
        
        return count;
    }

    private static int check2(int[] queue1, int[] queue2, int goal){
        int count = 0;
        int q1val = 0;
        int q2val = 0;

        for(int i=1; i <= queue1.length; i++){
            q1val += queue1[i-1];
            if(q1val == goal){
                count = i + queue2.length;
                break;
            }
        }

        for(int i=1; i <= queue2.length; i++){
            q2val += queue2[i-1];
            if(q2val == goal){
                count = i + queue1.length;
                break;
            }
        }
        
        return count;
    }
    
    private static int check3(int[] queue1, int[] queue2, int goal){
        int count = 0;
        boolean result = false;
        while(!confirmValue(queue1, queue2)){
            int temp1 = queue1[0];
            int temp2 = queue2[0];
            
            if(count == 0 || count % 2 == 0){
                queue1 = pop(queue1);
                queue2 = insert(queue2, temp1);
            }else{
                queue2 = pop(queue2);
                queue1 = insert(queue1, temp2);
            }
            count++;
            if(count > 10000) {
            	break;
            }
        }
        
        return count;
        
    }

    private static int[] pop(int[] queue){
        int[] result = new int[queue.length-1];
        for(int i=0; i<queue.length-1; i++){
            result[i] = queue[i+1];
        }
        return result;
    }
    
    private static int[] insert(int[] queue, int temp){
        int[] result = new int[queue.length+1];
        for(int i=0; i<queue.length; i++){
            result[i] = queue[i];
        }
        result[result.length-1] = temp;
        return result;
    }
}
