import { LitElement, html } from 'lit-element';

export class EjemploEvent5LIstener extends LitElement {

    static get properties() {
        return {
            name: {}
        };
    }

    constructor() {
        super();
        this.name = '';
    }
    render() {
        return html `
        <p @mylogin=${this._loginListener}> <slot></slot> </p>
        <p>Login: ${this.name}</p>
        `;
    }

    _loginListener(e) {
        this.name = e.detail.name;
    }
}
customElements.define('ejemplo-eventlistener', EjemploEvent5LIstener);