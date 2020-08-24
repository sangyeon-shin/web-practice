package designpatterns.builder.engine;

import designpatterns.builder.Engine;

public class KIAEngine extends Engine {
  public KIAEngine() {
    this.model = "기아 엔진";
    this.cc = 3000;
  }
  public void autogear() {}
}
