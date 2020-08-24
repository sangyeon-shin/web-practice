package designpatterns.builder.engine;

import designpatterns.builder.Engine;

public class HDEngine extends Engine {
  public HDEngine() {
    this.model = "현대 엔진";
    this.cc = 3500;
  }
  public void turbo() {}
}
