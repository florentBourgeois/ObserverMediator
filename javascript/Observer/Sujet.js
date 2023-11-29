import Observer from './Observer.js';

export default class Sujet {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifier() {
        this.observers.forEach(observer => {
            observer.update();
        });
    }
}
