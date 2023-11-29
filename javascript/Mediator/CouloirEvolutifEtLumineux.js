import Mediator from "./Installation.js";


/**
 * CouloirEvolutif est une implémentation d'un couloir non fixe.
 * Il peut y avoir autant d'interrupteurs ou de lampes que souhaité
 */
export default class CouloirEvolutifEtLumineux extends Mediator {
    constructor() {
        super();
        this.switchs = [];
        // si on met une interface Allumable ; on peut faire un tableau de Allumable qui contient les lampes et les switchs lumineux
        // techniquement avec js on pourrait meme sans s'embeter enregistrer nos switchs et nos lampes dans le meme tableau (les deux répondent à allumer et etteindre)
        this.lights = [];
        this.switchsLumineux = [];
        this.isOn = false;
    }

    addLight(light){
        this.lights.push(light);
    }

    addSwitch(s){
        this.switchs.push(s);
        s.setInstallation(this);
    }

    addSwitchLumineux(s){
        this.switchsLumineux.push(s);
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
        this.switchsLumineux.forEach(s=> s.eteindre());
    }

    eteindre() {
        console.log("Couloir : eteindre");
        this.isOn = false;
        this.lights.forEach(l=> l.eteindre());
        this.switchsLumineux.forEach(s=> s.allumer());
    }
}
