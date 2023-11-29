import Commutateur from "./Commutateur.js";

/**
 * Switch est un interrupteur simple
 * Appuyer dessus signale au médiateur qu'il a été pressé
 */
export default class Switch extends Commutateur{

    constructor() {
        super();
    }

    appuyer(){
        console.log("Switch : appuyé");
        this.modifier(); // envoie un signal au médiateur (cf classe parent)
    }

}
