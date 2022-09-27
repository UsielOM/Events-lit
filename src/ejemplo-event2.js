import { LitElement, html } from 'lit-element';

export class EjemploEvent2 extends LitElement {

    static get properties() {
        return {
            hostName: {},
            shadowName: {},
        };
    }

    constructor() {
        super();
        this.addEventListener('click', (e) => (this.hostName = e.target.localName));
        this.hostName = '';
        this.shadowName = '';
    }

    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener(
            'click',
            (e) => (this.shadowName = e.target.localName)
        );
        return root;
    }
    render() {
        return html `
            <p> <button>Click Me!</button></p>
            <p> Componente target: ${this.hostName} </p>
            <p> Shadow target: ${this.shadowName} </p>
        `;
    }
}
customElements.define('ejemplo-event2', EjemploEvent2);