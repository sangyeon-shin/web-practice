package designpatterns.builder;

public abstract class Engine {
  protected String model;
  protected int cc;
  
  @Override
  public String toString() {
    return "Engine [model=" + model + ", cc=" + cc + "]";
  }
}
