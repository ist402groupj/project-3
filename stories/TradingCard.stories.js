import { html } from 'lit';

import '../src/TradingCard.js';


export default {
  title: 'TradingCard',
  component: 'trading-card',
  argTypes: {
    need: { control: 'text' }, // attribute to define different card variations
  },
};

// todo: define and use slot
function Template({ need = 'rename', slot }) {
  return html` <trading-card need="${need}"></trading-card `;
}

export const Card = Template.bind({});

export const TradingCard = Template.bind({});
TradingCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`, //where do I find this slotted content? index.html or TradingCard.js?
};
