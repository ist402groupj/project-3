// dependencies / things imported
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TradingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'trading-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';

    setTimeout(() => {
      import('./Name.js');
      import('./Traits.js');
    }, 0);

    this.cardImage = [
      {
        name: 'Buddy the Elf',
        image: './assets/Elf.jpg',
        age: '30',
        height: '6ft 3',
        holidayCheer: '99',
      },
    ];
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
      cardImage: { type: Array },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'buddy') {
        this.cardImage = [
          {
            name: 'Buddy the Elf',
            image: './assets/Elf.jpg',
            age: '30',
            height: '6ft 3',
            holidayCheer: '99',
          },
        ];
      }
      if (propName === 'need' && this[propName] === 'mrsClaus') {
        this.cardImage = [
          {
            name: 'Mrs. Claus',
            image: './assets/MClaus.jpg',
            age: '228',
            height: '5ft 5',
            holidayCheer: '90',
          },
        ];
      }
      if (propName === 'need' && this[propName] === 'santa') {
        this.cardImage = [
          {
            name: 'Santa',
            image: './assets/Santa.jpg',
            age: '1751',
            height: '6ft',
            holidayCheer: '100',
          },
        ];
      }
      if (propName === 'need' && this[propName] === 'grinch') {
        this.cardImage = [
          {
            name: 'The Grinch',
            image: './assets/Grinch.jpg',
            age: '53',
            height: '6ft 2',
            holidayCheer: '10',
          },
        ];
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        background-color: white;
        justify-content: left;
        height: 410px;
        width: 280px;
        margin: 10px;
      }
      :host([need='buddy']) {
        color: white;
        background-color: green;
        border: solid 1px black;
      }
      :host([need='mrsClaus']) {
        color: black;
        background-color: white;
        border: dashed 3px red;
      }
      :host([need='santa']) {
        color: black;
        background-color: white;
        border: dashed 3px green;
      }
      :host([need='grinch']) {
        color: white;
        background-color: red;
        border: solid 1px black;
      }
      img {
        border-radius: 10px;
        max-width: 100%;
        max-height: auto;
        width: 200px;
        height: 200px;
      }
      ul {
        margin: 1px;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      ${this.cardImage.map(
        item =>
          html`
            <ul>
              <h1 style="text-align:center">${item.name}</h1>
              <img src=${item.image} alt="" />
              <div>
                <simple-icon-lite icon="star-border"></simple-icon-lite>
                Age: ${item.age}
              </div>
              <div>
                <simple-icon-lite
                  icon="social:person-outline"
                ></simple-icon-lite>
                Height: ${item.height}
              </div>
              <div>
                <simple-icon-lite icon="places:ac-unit"></simple-icon-lite>
                Holiday Cheer: ${item.holidayCheer}
              </div>
            </ul>
          `
      )}
    `;
  }

  /* haxProperties integration via file reference */

  static get haxProperties() {
    return new URL(`../lib/trading-card.haxProperties.json`, import.meta.url)
      .href;
  }
}
