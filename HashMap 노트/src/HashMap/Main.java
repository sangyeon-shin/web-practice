package HashMap;

import java.util.HashMap;

public class Main {

	public static void main(String[] args) {
		HashMap<String,Pokemon> pokedex = new HashMap();
		pokedex.put("피카츄", new Pokemon("피카츄"));
		pokedex.put("파이리", new Pokemon("파이리"));
		pokedex.put("이상해씨", new Pokemon("이상해씨"));
		pokedex.put("이상해풀", new Pokemon("이상해풀"));
		pokedex.put("이상해꽃", new Pokemon("이상해꽃"));
		
		Pokemon pikachu = pokedex.get("피카츄");
		pokedex.put("피카츄", new Pokemon("라이츄"));
		
		for(String key : pokedex.keySet()) {
			System.out.println(pokedex.get(key));
		}
	}

}
