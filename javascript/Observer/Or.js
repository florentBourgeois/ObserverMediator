import Sujet from './Sujet.js';
import Observer from "./Observer.js";

export default class Or extends Sujet { // il est impossible d'etendre deux classes et la notion d'interface n'existe pas en js Observer n'apparai pas
    constructor(s1, s2) {
        super();
        this.s1 = s1;
        s1.subscribe(this);
        this.s2 = s2;
        s2.subscribe(this);
    }


    update() {
        console.log("Or a été notifié")
        let status = this.s1.isOn != this.s2.isOn;
        if(this.isOn == status) return; // pas de changement
        this.isOn = status;
        console.log("Or a été maj -> isOn : " + this.isOn)
        this.notifier();
    }
}
