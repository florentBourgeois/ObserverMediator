/**
 * Commutateur est la classe Partenaire du pattern.
 * Elle déclenche des evenemenets sur le mediator (installation)
 */
export default class Commutateur {

    constructor() {
        this.installation = null;
    }

    setInstallation(installation){
        this.installation = installation;
    }

    modifier(){
        console.log("Commutateur modifié -> installation")
        this.installation.concilier(this);
    }
}
