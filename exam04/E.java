package step01.exam04;

import step01.exam03.C;

class F{
	public void dm() {
		C c = new C();
		c.callsetv1(30);
		c.v4 =10;
	}
}
public class E extends C {
	public void dm() {
		C c = new C();
		c.callsetv1(100);
		
		callsetv1(100);
		v2 = 200;
		v3 = 300;
		v4 = 400;
	}
}
