import Sujet from './Sujet.js';

export default class BasicSwitch extends Sujet {
    constructor() {
        super();
        this.isOn = false;
    }

    comute() {
        this.isOn = !this.isOn;
        console.log('BasicSwitch.comute() -> isON : ' + this.isOn );
        this.notifier();
    }
}
