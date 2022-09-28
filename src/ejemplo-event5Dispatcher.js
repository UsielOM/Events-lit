import { LitElement, html } from 'lit-element';

export class EjemploEvent5DIspatcher extends LitElement {

    get _input() {
        return (this.___input ??= this.renderRoot?.querySelector('input') ?? null);
    }

    render() {
        return html `
            <p>Name: <input></p>
            <p> <button @click=${this._dispatchLogin}>Login</button> </p>
        `;
    }

    _dispatchLogin() {
        const name = this._input.value.trim();
        if (name) {
            const options = {
                datail: { name },
                bubbles: true,
                composed: true,
            };
            this.dispatchEvent(new CustomEvent('mylogin', options));
        }
    }
}
customElements.define('ejemplo-event5', EjemploEvent5DIspatcher);