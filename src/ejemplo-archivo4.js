import { LitElement, html } from 'lit-element';

export class EjemploArchivo4 extends LitElement {

    static get properties() {
        return {
            clicked: {},
            focused: {},
        };
    }

    constructor() {
        super();
        this.clicked = '';
        this.focused = '';
    }

    data = [1, 2, 3];

    render() {
            return html `
        
        <div key="container" @click=${this._clickHandler}>
            ${this.data.map(
                (i) => html `
                <button key=$(i) @focus=${this._focusHandler}>Item ${i}</button>
                `
            )}

        </div>
        <p>Clicked: ${this.clicked}</p>
        <p>Focused: ${this.focused}</p>
        
        `;
    }

    _clickHandler(e){
        this.clicked = e.target.getAttribute('key');
    }
    _focusHandler(e) {

        this.focused = e.target.textContent;
    }
}
customElements.define('ejemplo-archivo4', EjemploArchivo4);