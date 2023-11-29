import SimpleLight from "./SimpleLight.js";

/**
 * SimpleBlueLight est une lampe... Bleu
 *
 */
export default class SimpleBlueLight extends SimpleLight{
    constructor() {
        super();
    }

    activate(){
        console.log("SimpleLight : ON With nice blue color");
        this.isOn = true;
    }
}
