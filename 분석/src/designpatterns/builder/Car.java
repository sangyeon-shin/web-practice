package designpatterns.builder;

public class Car {
  Engine engine;
  Sunroof sunroof;
  Airbag airbag;
  
  @Override
  public String toString() {
    return "Car [engine=" + engine + ", sunroof=" + sunroof + ", airbag=" + airbag + "]";
  }
}
