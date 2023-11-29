import Observer from "./Observer.js";

export default class Light extends Observer {
  constructor(sujet) {
    super();
    this.sujet = sujet;
    this.sujet.subscribe(this);
  }

  update() {
    if (this.sujet.isOn) {
      console.log("Light is on");
    } else {
      console.log("Light is off");
    }
  }
}
