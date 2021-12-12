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
    /* ...super.properties,*/
      cardImage: { type: Array},
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
        .imageWrap {
          width: auto; 
        }
        img {
          border-radius: 50px;
          max-width: 100%;
          max-height: auto;
          width: 200px;
          height: 200px;
        }
      `,
    ];
  }

  render() {
    return html`
    <ul>
        ${this.cardImage.map(
          item =>
            html`<h1>${item.name}</h1>
              <div class="imageWrap"><img src=${item.image} alt=""/></div>
              <div>Age: ${item.age}</div>
              <div>Height: ${item.height}</div>
              <div>Holiday Cheer: ${item.holidayCheer}</div>`
        )}
      </ul>
      <slot></slot>
    `;
  }
}
customElements.define(CardImage.tag, CardImage);
