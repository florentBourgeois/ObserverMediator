/**
 * Installation est la classe Mediator du pattern.
 * Elle réagit à des stimuli provenant des "partenaires" (Commutateur)
 */
export default class Mediator {
    constructor() {
    }

    concilier(commutateur){
        throw new Error('Method "concilier()" must be implemented.');
    }
}
