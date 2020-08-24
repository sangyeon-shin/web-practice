/* 빌더 패턴(Builder Pattern)
 * => 여러 부품 객체로 구성된 복합 객체를 생성하는 경우
 *    그 생성 과정의 복잡도를 줄이기 위해 사용하는 기법
 * => 복합 객체를 원하는 쪽에서는 그 객체를 생성하는데 필요한 설계 정보를 제공하고
 *    Builder 객체는 그 설계 정보에 의존하여 복합 객체를 생성하여 준다.
 */
package designpatterns.builder;

import java.util.HashMap;

public class Test01 {

  public static void main(String[] args) {
    //1) 설계도 준비
    HashMap<String,String> options = new HashMap<>();
    options.put("engine", "bmw");
    options.put("sunroof", "default");
    options.put("airbag", "super");
    
    
    //2) 빌더 객체를 통해 원하는 복합 객체를 생성한다.
    Car c = new CarBuilder().build(options);
    
    System.out.println(c);
  }

}









