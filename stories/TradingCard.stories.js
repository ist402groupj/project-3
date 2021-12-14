import { html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './TradingCard.js';


export default {
  title: 'Project Three',
  component: 'trading-card',
  argTypes: { //not sure what the argtypes need to be?
    need: { type: String, reflect: true },
    cardImage: { type: Array },
  },
};

function Template({cardImage = this.cardImage}) { //struggling with html
  return html` <trading-card  cardImage="${this.cardImage.map}">
        </trading-card>`;
}

export const Card = Template.bind({});