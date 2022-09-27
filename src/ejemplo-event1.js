import { LitElement, html } from 'lit-element';

export class EjemploEvent1 extends LitElement {

    static get properties() {
        return {
            count: { type: Number },
        };
    }

    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html `
        <p> <button @click="${this._increment}">Click Me!</button> </p>

        <p>Click count: ${this.count}</p>
        `;
    }

    _increment(e) {
        this.count++;
    }
}
customElements.define('ejemplo-event1', EjemploEvent1);