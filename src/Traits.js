/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class StatInfo extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'black';
    this.trait = 'Revolutionary';
    this.stat = '95';
  }

  static get tag() {
    return 'tc-statinfo';
  }

  static get properties() {
    return {
      ...super.properties,
      trait: { type: String },
      stat: {type: String}
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: 'Bebas Neue', sans-serif;
        }
        /* div {
          border: 1px dashed black;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        } */
        .word {
          /* text-transform: uppercase; */
          text-align: left;
          /* color: var(--simple-colors-default-theme-accent-6); */
          margin: 0px;
          font-size: 14px;
        }
        .num{
          /* text-transform: uppercase; */
          text-align: right;
          /* color: var(--simple-colors-default-theme-accent-6); */
          margin: 0px;
          font-size: 14px;
        }
        
        .container{
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
      <p class="num">${this.stat}<p>
     </div>
    </div> 
    `;
  }
}
customElements.define(StatInfo.tag, StatInfo);