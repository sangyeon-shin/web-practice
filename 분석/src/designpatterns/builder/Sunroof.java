package designpatterns.builder;

public abstract class Sunroof {
  protected String model;

  @Override
  public String toString() {
    return "Sunroof [model=" + model + "]";
  }
}
