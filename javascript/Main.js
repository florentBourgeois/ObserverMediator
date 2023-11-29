import SimpleLight from './jsDemo/SimpleLight.js';
import SimpleBlueLight from "./jsDemo/SimpleBlueLight.js";
import BasicSwitch from './Observer/BasicSwitch.js';
import Light from "./Observer/Light.js";

function jsDemo(){
    console.log('\n\n\n-----------usage de base de JS-----------')
    let light = new SimpleLight();
    light.activate();
    light.disactivate();
    let blueLight = new SimpleBlueLight();
    blueLight.activate();
    blueLight.disactivate();
}

function observerDemonstration(){
    console.log('\n\n\n-----------démonstration des observer-----------')
    // create a new instance of BasicSwitch
    let basicSwitch = new BasicSwitch();

    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();

    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();

    console.log("\nadd a light to the switch")
    let light = new Light(basicSwitch);

    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();
    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();

    console.log("\nadd many lights to the switch")
    //add many observers to the switch
    let light2 = new Light(basicSwitch);
    let light3 = new Light(basicSwitch);

    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();
    console.log("-----------comute the BasicSwitch")
    basicSwitch.comute();

}


function mediatorDemonstration(){
    console.log('\n\n\n-----------démonstration des mediator-----------')
}

jsDemo();

observerDemonstration();

//wait for 3 seconds before showing the mediator demonstration
setTimeout(mediatorDemonstration, 3000);

