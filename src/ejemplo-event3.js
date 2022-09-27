import { LitElement, html } from 'lit-element';

export class EjemploEvent3 extends LitElement {

    static get properties() {
        return {
            clicked: {},
        };
    }

    constructor() {
        super();
        this.clicked = '';
    }
    render() {
        return html `
        <div @click="${this._clickHandler}">
            <button>Item 1</button>
            <button>Item 2</button>
            <button>Item 3</button>
        </div>
        <p>Clicked: ${this.clicked}</p>

        `;
    }

    _clickHandler(e) {
        this.clicked = e.target === e.currentTarget ? 'container' : e.target.textContent;
    }
}
customElements.define('ejemplo-event3', EjemploEvent3);