import Mediator from "./Installation.js";
import Switch from "./Switch.js";
import Light from "./Light.js";

/**
 * Couloir est une implémentation d'un couloir "simple".
 * Il y a deux interrupteurs et ils pilotent une lampe
 */
export default class Couloir extends Mediator {
    constructor() {
        super();
        this.s1 = new Switch();
        this.s1.setInstallation(this);
        this.s2 = new Switch();
        this.s2.setInstallation(this);
        this.l1 = new Light();
        this.isOn = false;
    }

    concilier(commutateur){
        console.log("couloir notifié d'un changement sur " + commutateur);
        if(this.isOn)
            this.allumer();
        else
            this.eteindre();
    }

    allumer(){
        console.log("Couloir : allumer");
        this.isOn = true;
        this.l1.allumer();
    }

    eteindre() {
        console.log("Couloir : eteindre");
        this.isOn = false;
        this.l1.eteindre();
    }
}
