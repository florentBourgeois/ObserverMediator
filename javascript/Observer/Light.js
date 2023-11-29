import Observer from "./Observer.js";

export default class Light extends Observer {
  constructor(basicSwitch) {
    super();
    this.basicSwitch = basicSwitch;
    this.basicSwitch.subscribe(this);
  }

  update() {
    if (this.basicSwitch.isOn) {
      console.log("Light is on");
    } else {
      console.log("Light is off");
    }
  }
}
