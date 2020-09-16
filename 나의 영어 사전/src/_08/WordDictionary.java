package _08;

import java.util.HashMap;

public class WordDictionary {
	HashMap<String,String> hm = new HashMap();
	
	public void addWord(String english,String korean) {
		String trans = english.toLowerCase();
		hm.put(trans, korean);
	}
	
	public String find(String english) {
		String trans = english.toLowerCase();
		String val = hm.get(trans);
		return val;
	}
	
}
