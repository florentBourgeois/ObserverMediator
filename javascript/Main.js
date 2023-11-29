import SimpleLight from './jsDemo/SimpleLight.js';
import SimpleBlueLight from "./jsDemo/SimpleBlueLight.js";
import BasicSwitch from './Observer/BasicSwitch.js';
import Light from "./Observer/Light.js";
import Or from "./Observer/Or.js";

import Couloir from "./Mediator/Couloir.js";
import CouloirEvolutif from "./Mediator/CouloirEvolutif.js";
import Switch from "./Mediator/Switch.js";
import MediatorLight from "./Mediator/Light.js";
import CouloirEvolutifEtLumineux from "./Mediator/CouloirEvolutifEtLumineux.js";
import SwitchLumineux from "./Mediator/SwitchLumineux.js";

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


    console.log("\n---------switch and or ----------")
    let switchForOr = new BasicSwitch();
    let or = new Or(basicSwitch, switchForOr);
    let lightOr = new Light(or);
    basicSwitch.comute();
    switchForOr.comute();
}


function mediatorDemonstration(){
    console.log('\n\n\n-----------démonstration des mediator-----------')
    console.log("-----------couloir simple-----------")
    let couloir = new Couloir();
    let s1 = couloir.s1;
    let s2 = couloir.s2;
    s1.appuyer();
    s2.appuyer();
    s2.appuyer();


    console.log("-----------couloir evolutif-----------")
    let couloirEvolutif = new CouloirEvolutif();
    let s3 = new Switch();
    let l1 = new MediatorLight();
    let l2 = new MediatorLight();
    let l3 = new MediatorLight();
    couloirEvolutif.addSwitch(s3);
    couloirEvolutif.addLight(l1);
    s3.appuyer();
    couloirEvolutif.addSwitch(new Switch());
    couloirEvolutif.addLight(l2);
    couloirEvolutif.addLight(l3);
    s3.appuyer();



    console.log("-----------boutons lumineux-----------")
    let couloirEvolutifEtLumineux = new CouloirEvolutifEtLumineux();
    let sLumineux1 = new SwitchLumineux(new MediatorLight());
    let sLumineux2 = new SwitchLumineux(new MediatorLight());

    couloirEvolutifEtLumineux.addSwitch(s3);
    couloirEvolutifEtLumineux.addSwitchLumineux(sLumineux1);
    couloirEvolutifEtLumineux.addSwitchLumineux(sLumineux2);
    couloirEvolutifEtLumineux.addLight(l1);
    couloirEvolutifEtLumineux.addLight(l2);
    sLumineux1.appuyer();
    sLumineux2.appuyer();
}

jsDemo();

observerDemonstration();

//wait for 3 seconds before showing the mediator demonstration
setTimeout(mediatorDemonstration, 3000);

