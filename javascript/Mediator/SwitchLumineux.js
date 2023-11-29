import Commutateur from "./Commutateur.js";
import Switch from "./Switch.js";

/**
 * SwitchLumineux est un interrupteur qui a un témoins lumineux
 * Le témoins est allumé quand le couloir est eteind
 */
export default class SwitchLumineux extends Switch{

    constructor(light) {
        super();
        this.light = light;
    }

    // hors console log pourrait ne pas être surchargée. La fonction héritée du switch marche très très bien
    appuyer(){
        console.log("SwitchLumineux : appuyé");
        this.modifier(); // envoie un signal au médiateur (cf classe parent)
    }

    allumer(){
        console.log("SwitchLumineux : allumé");
        this.light.allumer();
    }

    eteindre(){
        console.log("SwitchLumineux : éteint");
        this.light.eteindre();
    }
}
