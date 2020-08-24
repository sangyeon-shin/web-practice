package designpatterns.builder;

import java.util.Map;

import designpatterns.builder.airbag.DefaultAirbag;
import designpatterns.builder.airbag.SuperAirbag;
import designpatterns.builder.engine.BMWEngine;
import designpatterns.builder.engine.HDEngine;
import designpatterns.builder.engine.KIAEngine;
import designpatterns.builder.sunroof.DefaultSunroof;
import designpatterns.builder.sunroof.GoldSunroof;

public class CarBuilder {
	
  public Car build(Map<String, String> options) {
    Car c = new Car();
    
    if (options.get("engine") != null) {
      c.engine = createEngine(options.get("engine"));
    }
    
    if (options.get("sunroof") != null) {
      c.sunroof = createSunroof(options.get("sunroof"));
    }
    
    if (options.get("airbag") != null) {
      c.airbag = createAirbag(options.get("airbag"));
    }
    
    return c;
  }

  private Airbag createAirbag(String name) {
    switch (name) {
    case "default":
      return new DefaultAirbag();
    case "super":
      return new SuperAirbag();
    }
    return null;
  }

  private Sunroof createSunroof(String name) {
    switch (name) {
    case "default":
      return new DefaultSunroof();
    case "gold":
      return new GoldSunroof();
    }
    return null;
  }

  private Engine createEngine(String name) {
    switch (name) {
    case "hyundai":
      return new HDEngine();
    case "kia":
      return new KIAEngine();
    case "bmw":
      return new BMWEngine();
    }
    return null;
  }
}




