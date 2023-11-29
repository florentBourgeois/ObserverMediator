import SimpleLight from './jsDemo/SimpleLight.js';
import SimpleBlueLight from "./jsDemo/SimpleBlueLight.js";


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
}


function mediatorDemonstration(){
    console.log('\n\n\n-----------démonstration des mediator-----------')
}

jsDemo();

observerDemonstration();

//wait for 3 seconds before showing the mediator demonstration
setTimeout(mediatorDemonstration, 3000);

