package designpatterns.builder;

public abstract class Airbag {
  protected String model;
  
  @Override
  public String toString() {
    return "Airbag [model=" + model + "]";
  }
}
