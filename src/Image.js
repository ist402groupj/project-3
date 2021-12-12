import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class Photo extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'grey';
    this.image = new URL(
      '../assets/WinkingRedPanda.jpg',
      import.meta.url
    ).href;
    this.alt = 'Red Panda Winking';
  }

  static get tag() {
    return 'tc-photo';
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
          --img-width: 310px;
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
customElements.define(Photo.tag, Photo);