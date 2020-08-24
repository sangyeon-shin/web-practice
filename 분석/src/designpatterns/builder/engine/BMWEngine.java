package designpatterns.builder.engine;

import designpatterns.builder.Engine;

public class BMWEngine extends Engine {
  public BMWEngine() {
    this.model = "BMW 엔진";
    this.cc = 5500;
  }
  public void hybrid() {}
}
