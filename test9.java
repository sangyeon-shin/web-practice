package test;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class test9 {
	public static void main(String[] args) {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        try{
            int cnt = Integer.parseInt(br.readLine());
        
            for(int i = 0; i < cnt; i++){
                st = new StringTokenizer(br.readLine()," ");
                bw.write((Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken()))+ "\n");
            }
            br.close();
        
		    bw.flush();
		    bw.close();
        }catch(IOException e){
            e.printStackTrace();
        }
	}
}
