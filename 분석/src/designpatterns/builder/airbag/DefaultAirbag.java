package designpatterns.builder.airbag;

import designpatterns.builder.Airbag;

public class DefaultAirbag extends Airbag {
  public DefaultAirbag() {
    this.model = "기본 에어백";
  }
  
  public void protectFront() {}
}
