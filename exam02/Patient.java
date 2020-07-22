package step01.exam02;

public class Patient {
	String name;
	private int age;
	private float weight;
	private float height;
	boolean gender;
	//인스턴스 변수의 값을 꺼내주는 메섣 => 셋터 메서드
	void setAge(int age) {
		if(age > 0 && age <120)
			this.age =age;
	}
	void setWeight(float weight) {
		if(weight > 0 && weight < 100)
			this.weight = weight;
	}
	void setHeight(float height) {
		if(height > 0 && height < 300)
			this.height = height;
	}
	//인스턴스 변수의 값을 꺼내주는 메섣 => 겟터 메서드
	int getAge() {
		return age;
	}
	float getWeight() {
		return weight;
	}
	float getHeight() {
		return height;
	}
}


