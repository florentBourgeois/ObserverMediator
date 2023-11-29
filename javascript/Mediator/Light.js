/**
 * Light est une lampe. elle est pilotée par une installation
 *
 */
export default class Light {
    constructor() {
        this.isOn = false;
    }

    allumer(){
        console.log("Lampe : allumer");
        this.isOn = true;
    }

    eteindre(){
        console.log("Lampe : eteindre");
        this.isOn = false;
    }

    isOn(){
        return this.isOn;
    }

}
