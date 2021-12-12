import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class CardImage extends SimpleColors {
  constructor() {
    this.cardImage = [
      {
        name: 'Buddy the Elf',
        image: './assets/Elf.jpg',
        age: '30',
        height: '6ft 3',
        holidayCheer: '99.9',

      },
      {
        name: 'Mrs. Claus',
        image: './assets/MClaus.jpg',
        age: '228',
        height: '5ft 5',
        holidayCheer: '90',
      },
      {
        name: 'The Grinch',
        image: './assets/Grinch.jpg',
        age: '53',
        height: '6ft 2',
        holidayCheer: '10',
      },
      {
        name: 'Santa',
        image: './assets/Santa.jpg',
        age: '1751',
        height: '6ft',
        holidayCheer: '100',
      },
    ];
  }

  static get tag() {
    return 'card-image';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, reflect: true },
      alt: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --img-width: 200px;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        img {
          width: var(--img-width);
          height: calc(var(--img-width) * 1);
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(Image.tag, Image);
