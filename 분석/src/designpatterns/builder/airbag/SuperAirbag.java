package designpatterns.builder.airbag;

import designpatterns.builder.Airbag;

public class SuperAirbag extends Airbag {
  public SuperAirbag() {
    this.model = "수퍼 에어백";
  }
  
  public void protectSideAndFront() {}
}
