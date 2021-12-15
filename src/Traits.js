/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class Traits extends SimpleColors {
  constructor() {
    super();
   /* this.accentColor = 'black';
    this.trait = 'Amazing';
    this.stat = '10';*/
  }

  static get tag() {
    return 'card-traits';
  }

  static get properties() {
    return {
      ...super.properties,
      trait: { type: String },
      stat: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: 'Bebas Neue', sans-serif;
        }
        div {
          border: 1px solid black;
          background: green;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .word {
          text-transform: uppercase;
          text-align:left;
          color: var(--simple-colors-default-theme-accent-7);
          margin: 0px;
          font-size: 12px;
        }
        .num {
          text-transform: uppercase;
          text-align: right;
          color: var(--simple-colors-default-theme-accent-7);
          margin: 0px;
          font-size: 12px;
        }

        .container {
          display: grid;
          height: 4vh;
          border: 3px black;
          grid-template-columns: 10fr 10fr;
          border-bottom: 3px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="container">
        <div>
          <p class="word">${this.trait}</p>
        </div>
        <div>
          <p class="num">${this.stat}</p>
          <p></p>
        </div>
      </div>
    `;
  }
}
customElements.define(Traits.tag, Traits);
