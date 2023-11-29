import Mediator from "./Installation.js";
import Switch from "./Switch.js";
import Light from "./Light.js";

/**
 * CouloirEvolutif est une implémentation d'un couloir non fixe.
 * Il peut y avoir autant d'interrupteurs ou de lampes que souhaité
 */
export default class CouloirEvolutif extends Mediator {
    constructor() {
        super();
        this.switchs = [];
        this.lights = [];
        this.isOn = false;
    }

    addLight(light){
        this.lights.push(light);
    }

    addSwitch(s){
        this.switchs.push(s);
        s.setInstallation(this);
    }

    concilier(commutateur){
        console.log("couloirEvolutif notifié d'un changement sur " + commutateur);
        if(this.isOn)
            this.allumer();
        else
            this.eteindre();
    }

    allumer(){
        console.log("CouloirEvolutif : allumer");
        this.isOn = true;
        this.lights.forEach(l=> l.allumer());
    }

    eteindre() {
        console.log("Couloir : eteindre");
        this.isOn = false;
        this.lights.forEach(l=> l.eteindre());
    }
}
