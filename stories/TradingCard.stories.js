import { html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './TradingCard.js';


export default {
  title: 'Trading Card',
  component: 'trading-card',
  argTypes: {
    need: { control: 'text' }, //I dont understand what "need" is for
  },
};
function Template({ need = 'rename', slot }) {
  return html` <trading-card need="${need}"> ${slot} </trading-card `;
}

export const Card = Template.bind({});

export const TradingCard = Template.bind({});
TradingCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`, //where do I find this slotted content? index.html or TradingCard.js?
};
