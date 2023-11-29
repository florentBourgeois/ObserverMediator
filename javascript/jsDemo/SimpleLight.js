/**
 * SimpleLight est une lampe.
 *
 */
export default class SimpleLight {
    constructor() {
        this.isOn = false;
    }

    activate(){
        console.log("SimpleLight : ON");
        this.isOn = true;
    }

    disactivate(){
        console.log("SimpleLight : OFF");
        this.isOn = false;
    }

    isOn(){
        return this.isOn;
    }

}
