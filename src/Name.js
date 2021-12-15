/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class Name extends SimpleColors {
  constructor() {
    super();
  }

  static get tag() {
    return 'card-name';
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: 'Bebas Neue', sans-serif;
          display: block;
          padding: 5px;
          text-allign: center;

        }
        div {
          border: 3px black;
          display: flex;
          flex-direction: column;
        }
        p {
          text-transform: uppercase;
          text-align:left;
          font-weight: bolder;
          color: var(--simple-colors-default-theme-accent-1);
          margin: 9px;
          font-size: 14px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <p>${this.name}</p>
      </div>
    `;
  }
}
customElements.define(Name.tag, Name);
